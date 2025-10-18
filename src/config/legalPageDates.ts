export const LEGAL_PAGE_DATES = {
  '/privacy': {
    datePublished: '2025-01-01',
    lastReviewed: '2025-10-01',
    genre: 'Legal Document'
  },
  '/terms': {
    datePublished: '2025-01-01',
    lastReviewed: '2025-10-01',
    genre: 'Legal Document'
  },
  '/cookies': {
    datePublished: '2025-01-01',
    lastReviewed: '2025-10-01',
    genre: 'Legal Document'
  }
} as const;

export type LegalPagePath = keyof typeof LEGAL_PAGE_DATES;
