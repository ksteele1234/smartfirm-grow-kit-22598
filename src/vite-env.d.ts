/// <reference types="vite/client" />

interface Window {
  dataLayer: Record<string, unknown>[];
  fbq: (...args: unknown[]) => void;
}
