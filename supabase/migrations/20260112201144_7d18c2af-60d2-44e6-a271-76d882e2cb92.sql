-- Recreate the view with explicit SECURITY INVOKER (safer - uses caller's permissions)
DROP VIEW IF EXISTS public.public_profiles;

CREATE VIEW public.public_profiles 
WITH (security_invoker = true)
AS
SELECT 
  id,
  display_name,
  avatar_url,
  bio,
  created_at,
  updated_at
FROM public.profiles;

-- Re-grant access to the view
GRANT SELECT ON public.public_profiles TO anon;
GRANT SELECT ON public.public_profiles TO authenticated;