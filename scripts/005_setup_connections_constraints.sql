-- Adding proper constraints and RLS policies for connections table
-- Ensure connections table has proper foreign key constraints
ALTER TABLE connections 
ADD CONSTRAINT connections_requester_fkey 
FOREIGN KEY (requester_id) REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE connections 
ADD CONSTRAINT connections_addressee_fkey 
FOREIGN KEY (addressee_id) REFERENCES auth.users(id) ON DELETE CASCADE;

-- Add check constraint for valid status values
ALTER TABLE connections 
ADD CONSTRAINT connections_status_check 
CHECK (status IN ('pending', 'accepted', 'rejected'));

-- Add unique constraint to prevent duplicate connection requests
ALTER TABLE connections 
ADD CONSTRAINT connections_unique_pair 
UNIQUE (requester_id, addressee_id);

-- Enable RLS on connections table
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view connections where they are involved
CREATE POLICY "Users can view their connections" ON connections
FOR SELECT USING (
  auth.uid() = requester_id OR auth.uid() = addressee_id
);

-- Policy: Users can create connection requests
CREATE POLICY "Users can create connection requests" ON connections
FOR INSERT WITH CHECK (
  auth.uid() = requester_id AND requester_id != addressee_id
);

-- Policy: Users can update connections where they are the addressee (accept/reject)
CREATE POLICY "Users can respond to connection requests" ON connections
FOR UPDATE USING (
  auth.uid() = addressee_id
);

-- Add default values and constraints
ALTER TABLE connections ALTER COLUMN id SET DEFAULT gen_random_uuid();
ALTER TABLE connections ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE connections ALTER COLUMN updated_at SET DEFAULT now();
ALTER TABLE connections ALTER COLUMN status SET DEFAULT 'pending';

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_connections_updated_at BEFORE UPDATE ON connections
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
