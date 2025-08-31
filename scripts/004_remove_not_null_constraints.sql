-- Remove all not-null constraints from profiles table to prevent account creation errors
-- This allows users to create accounts without providing all profile information

-- Make id column nullable and add default UUID generation
ALTER TABLE profiles ALTER COLUMN id DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN id SET DEFAULT gen_random_uuid();

-- Make user_id nullable (though this should typically have a value)
ALTER TABLE profiles ALTER COLUMN user_id DROP NOT NULL;

-- Make all other columns nullable to allow partial profile creation
ALTER TABLE profiles ALTER COLUMN full_name DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN email DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN bio DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN location DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN interests DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN about_me DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN experience DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN education DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN linkedin_url DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN twitter_url DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN instagram_url DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN website_url DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN profile_image_url DROP NOT NULL;
ALTER TABLE profiles ALTER COLUMN is_public DROP NOT NULL;

-- Set default values for commonly used fields
ALTER TABLE profiles ALTER COLUMN is_public SET DEFAULT true;
ALTER TABLE profiles ALTER COLUMN created_at SET DEFAULT now();
ALTER TABLE profiles ALTER COLUMN updated_at SET DEFAULT now();

-- Create or replace the updated trigger for automatic timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
