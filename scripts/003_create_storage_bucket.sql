-- Create storage bucket for profile images
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-images', 'profile-images', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist (for clean re-run)
DROP POLICY IF EXISTS "Users can upload their own profile images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own profile images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete their own profile images" ON storage.objects;
DROP POLICY IF EXISTS "Profile images are publicly viewable" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload profile images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update profile images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete profile images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view profile images" ON storage.objects;

-- Set up RLS policies for the storage bucket
-- Allow any authenticated user to upload to profile-images bucket
CREATE POLICY "Authenticated users can upload profile images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'profile-images');

-- Allow any authenticated user to update files in profile-images bucket  
CREATE POLICY "Authenticated users can update profile images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'profile-images');

-- Allow any authenticated user to delete files in profile-images bucket
CREATE POLICY "Authenticated users can delete profile images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'profile-images');

-- Allow anyone to view profile images (public bucket)
CREATE POLICY "Anyone can view profile images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'profile-images');
