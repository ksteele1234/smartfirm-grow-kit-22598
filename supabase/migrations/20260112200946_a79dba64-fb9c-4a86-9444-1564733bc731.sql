-- Create a public view that excludes email addresses
CREATE OR REPLACE VIEW public.public_profiles AS
SELECT 
  id,
  display_name,
  avatar_url,
  bio,
  created_at,
  updated_at
FROM public.profiles;

-- Grant access to the view for both anon and authenticated users
GRANT SELECT ON public.public_profiles TO anon;
GRANT SELECT ON public.public_profiles TO authenticated;

-- Drop the overly permissive "Anyone can view profiles" policy
DROP POLICY IF EXISTS "Anyone can view profiles" ON public.profiles;

-- Create a new policy that only allows authenticated users to view full profiles (including email)
CREATE POLICY "Authenticated users can view profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

-- Admins can still manage all profiles
-- (The existing "Admins can manage profiles" policy remains unchanged)