-- Create connections table for managing user connections and friend requests
CREATE TABLE IF NOT EXISTS connections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  requester_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  addressee_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure users can't send duplicate requests
  UNIQUE(requester_id, addressee_id),
  -- Ensure users can't connect to themselves
  CHECK (requester_id != addressee_id)
);

-- Enable RLS
ALTER TABLE connections ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view connections where they are involved
CREATE POLICY "Users can view their own connections" ON connections
  FOR SELECT USING (
    auth.uid() = requester_id OR auth.uid() = addressee_id
  );

-- Policy: Users can create connection requests
CREATE POLICY "Users can create connection requests" ON connections
  FOR INSERT WITH CHECK (
    auth.uid() = requester_id
  );

-- Policy: Users can update connections they received (accept/reject)
CREATE POLICY "Users can update received connection requests" ON connections
  FOR UPDATE USING (
    auth.uid() = addressee_id
  );

-- Policy: Users can delete their own sent requests
CREATE POLICY "Users can delete their own requests" ON connections
  FOR DELETE USING (
    auth.uid() = requester_id
  );

-- Create indexes for better performance
CREATE INDEX idx_connections_requester ON connections(requester_id);
CREATE INDEX idx_connections_addressee ON connections(addressee_id);
CREATE INDEX idx_connections_status ON connections(status);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_connections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_connections_updated_at
  BEFORE UPDATE ON connections
  FOR EACH ROW
  EXECUTE FUNCTION update_connections_updated_at();
