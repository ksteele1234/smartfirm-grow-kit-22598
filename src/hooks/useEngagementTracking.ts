import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Tracks scroll depth and time-on-page engagement events via dataLayer.
 *
 * GA4 considers a session "engaged" when it has 10+ seconds, 2+ pageviews,
 * or a conversion event. Without engagement signals, single-page sessions
 * are counted as bounces even when users read content for minutes.
 */
const useEngagementTracking = () => {
  const { pathname } = useLocation();
  const scrollMilestonesRef = useRef<Set<number>>(new Set());
  const timerIdsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    scrollMilestonesRef.current.clear();
    timerIdsRef.current.forEach(clearTimeout);
    timerIdsRef.current = [];

    const pushEvent = (event: string, params: Record<string, unknown>) => {
      if (window.dataLayer) {
        window.dataLayer.push({ event, ...params });
      }
    };

    // Scroll depth tracking: 25%, 50%, 75%, 100%
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);
      const milestones = [25, 50, 75, 100];

      for (const milestone of milestones) {
        if (percent >= milestone && !scrollMilestonesRef.current.has(milestone)) {
          scrollMilestonesRef.current.add(milestone);
          pushEvent('scroll_depth', {
            scroll_percent: milestone,
            page_path: pathname,
          });
        }
      }
    };

    // Time-on-page milestones: 10s, 30s, 60s, 180s
    const timeMilestones = [10, 30, 60, 180];
    for (const seconds of timeMilestones) {
      const id = setTimeout(() => {
        pushEvent('time_on_page', {
          seconds_on_page: seconds,
          page_path: pathname,
        });
      }, seconds * 1000);
      timerIdsRef.current.push(id);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timerIdsRef.current.forEach(clearTimeout);
      timerIdsRef.current = [];
    };
  }, [pathname]);
};

export default useEngagementTracking;
