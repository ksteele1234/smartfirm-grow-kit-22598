-- ============================================================================
-- SmartFirm: Cron job to send nurture emails every 6 hours
-- ============================================================================
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor > New Query)
--
-- Prerequisites (already enabled):
--   CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
--   CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
-- ============================================================================

-- Schedule: runs at midnight, 6am, noon, 6pm UTC every day
-- The Edge Function checks email_events for any "scheduled" emails
-- whose scheduled_for timestamp has passed, then sends them via Resend.

SELECT cron.schedule(
  'send-nurture-emails',
  '0 */6 * * *',
  $$
  SELECT net.http_post(
    url   := 'https://sywfvkjxefuykrannots.supabase.co/functions/v1/send-nurture-emails',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5d2Z2a2p4ZWZ1eWtyYW5ub3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5OTM4OTUsImV4cCI6MjA4ODU2OTg5NX0.TW8CFp_kQWf0bVwBgN_ImoJJrqm-oXPGQDr6AH_Dbr0"}'::jsonb,
    body  := '{}'::jsonb
  ) AS request_id;
  $$
);

-- ============================================================================
-- Daily Briefing: Weekdays at 14:30 UTC (7:30 AM PDT / 6:30 AM PST)
-- Sends morning email to Katie with leads, pipeline, email stats, action items
-- ============================================================================

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

-- ============================================================================
-- Weekly Pipeline Summary: Monday at 15:00 UTC (8:00 AM PDT / 7:00 AM PST)
-- Sends pipeline snapshot via Telegram + email
-- ============================================================================

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

-- ============================================================================
-- Stale Lead Check: Monday at 16:00 UTC (9:00 AM PDT / 8:00 AM PST)
-- Sends Telegram alert for contacts with no activity in 14+ days
-- ============================================================================

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
