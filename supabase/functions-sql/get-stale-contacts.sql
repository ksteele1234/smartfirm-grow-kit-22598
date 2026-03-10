-- Returns contacts with no activity in N days (default 14)
-- Used by check-stale-leads Edge Function and daily briefing
CREATE OR REPLACE FUNCTION get_stale_contacts(days_threshold integer DEFAULT 14)
RETURNS TABLE (
  id uuid,
  first_name text,
  last_name text,
  email text,
  company_name text,
  stage text,
  last_activity_at timestamptz,
  created_at timestamptz
) AS $$
  SELECT
    c.id, c.first_name, c.last_name, c.email, c.company_name, c.stage,
    max(a.created_at) AS last_activity_at,
    c.created_at
  FROM contacts c
  LEFT JOIN activity_log a ON a.contact_id = c.id
  WHERE c.stage NOT IN ('closed_won', 'closed_lost', 'client')
  GROUP BY c.id, c.first_name, c.last_name, c.email, c.company_name, c.stage, c.created_at
  HAVING max(a.created_at) < (now() - make_interval(days => days_threshold))
     OR (max(a.created_at) IS NULL AND c.created_at < (now() - make_interval(days => days_threshold)))
  ORDER BY coalesce(max(a.created_at), c.created_at) ASC;
$$ LANGUAGE sql STABLE;
