-- Daily Briefing: Weekdays at 14:30 UTC (7:30 AM PDT)
SELECT cron.schedule(
  'send-daily-briefing',
  '30 14 * * 1-5',
  $$
  SELECT net.http_post(
    url   := 'https://sywfvkjxefuykrannots.supabase.co/functions/v1/send-daily-briefing',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5d2Z2a2p4ZWZ1eWtyYW5ub3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5OTM4OTUsImV4cCI6MjA4ODU2OTg5NX0.TW8CFp_kQWf0bVwBgN_ImoJJrqm-oXPGQDr6AH_Dbr0"}'::jsonb,
    body  := '{}'::jsonb
  ) AS request_id;
  $$
);

-- Weekly Pipeline Summary: Monday at 15:00 UTC (8:00 AM PDT)
SELECT cron.schedule(
  'send-weekly-summary',
  '0 15 * * 1',
  $$
  SELECT net.http_post(
    url   := 'https://sywfvkjxefuykrannots.supabase.co/functions/v1/send-weekly-summary',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5d2Z2a2p4ZWZ1eWtyYW5ub3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5OTM4OTUsImV4cCI6MjA4ODU2OTg5NX0.TW8CFp_kQWf0bVwBgN_ImoJJrqm-oXPGQDr6AH_Dbr0"}'::jsonb,
    body  := '{}'::jsonb
  ) AS request_id;
  $$
);

-- Stale Lead Check: Monday at 16:00 UTC (9:00 AM PDT)
SELECT cron.schedule(
  'check-stale-leads',
  '0 16 * * 1',
  $$
  SELECT net.http_post(
    url   := 'https://sywfvkjxefuykrannots.supabase.co/functions/v1/check-stale-leads',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5d2Z2a2p4ZWZ1eWtyYW5ub3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5OTM4OTUsImV4cCI6MjA4ODU2OTg5NX0.TW8CFp_kQWf0bVwBgN_ImoJJrqm-oXPGQDr6AH_Dbr0"}'::jsonb,
    body  := '{}'::jsonb
  ) AS request_id;
  $$
);
