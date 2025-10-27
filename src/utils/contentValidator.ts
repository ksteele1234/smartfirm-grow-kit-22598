/**
 * Phase 5: Testing & Validation Utilities
 * Validates content against knowledge base rules
 */

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  score: number;
}

/**
 * Validate brand color usage
 */
export function validateBrandColors(content: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  const forbiddenColors = ['#FFD700', '#5F0F40', 'gold', 'purple'];
  
  forbiddenColors.forEach(color => {
    if (content.toLowerCase().includes(color.toLowerCase())) {
      errors.push(`Forbidden color detected: ${color}`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score: errors.length === 0 ? 100 : 0
  };
}

/**
 * Validate messaging tone
 */
export function validateMessaging(content: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  const forbiddenPhrases = [
    'guarantee',
    'guaranteed results',
    'overnight success',
    'get rich quick',
    'no effort required',
    'limited time only',
    'act now',
    'once in a lifetime'
  ];
  
  forbiddenPhrases.forEach(phrase => {
    if (content.toLowerCase().includes(phrase)) {
      warnings.push(`Avoid aggressive language: "${phrase}"`);
    }
  });
  
  // Check for personal names/characteristics
  const personalPatterns = [
    /\b(john|jane|bob|alice)\b/i,
    /\b(he|she) (is|was|has)\b/i
  ];
  
  personalPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      warnings.push('Avoid specific personal names or characteristics');
    }
  });
  
  const score = Math.max(0, 100 - (warnings.length * 10));
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score
  };
}

/**
 * Validate keyword density
 */
export function validateKeywordDensity(
  content: string,
  keyword: string,
  maxDensity: number = 2.0
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  const words = content.toLowerCase().split(/\s+/);
  const keywordWords = keyword.toLowerCase().split(/\s+/);
  
  let occurrences = 0;
  for (let i = 0; i <= words.length - keywordWords.length; i++) {
    const phrase = words.slice(i, i + keywordWords.length).join(' ');
    if (phrase === keywordWords.join(' ')) {
      occurrences++;
    }
  }
  
  const density = (occurrences / words.length) * 100;
  
  if (density > maxDensity) {
    errors.push(`Keyword density too high: ${density.toFixed(2)}% (max ${maxDensity}%)`);
  }
  
  if (density === 0) {
    warnings.push('Primary keyword not found in content');
  }
  
  const score = density <= maxDensity && density > 0 ? 100 : 
                density === 0 ? 50 : 
                Math.max(0, 100 - ((density - maxDensity) * 20));
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score
  };
}

/**
 * Validate heading structure
 */
export function validateHeadingStructure(html: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  
  if (h1Count === 0) {
    errors.push('Missing H1 heading');
  } else if (h1Count > 1) {
    errors.push('Multiple H1 headings detected (should be exactly 1)');
  }
  
  if (h2Count === 0) {
    warnings.push('No H2 headings found - consider adding subheadings');
  }
  
  const score = h1Count === 1 && h2Count > 0 ? 100 :
                h1Count === 1 ? 80 :
                50;
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score
  };
}

/**
 * Validate meta description
 */
export function validateMetaDescription(description: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  const length = description.length;
  
  if (length === 0) {
    errors.push('Meta description is empty');
  } else if (length < 120) {
    warnings.push(`Meta description too short: ${length} chars (recommend 140-160)`);
  } else if (length > 160) {
    warnings.push(`Meta description too long: ${length} chars (recommend 140-160)`);
  }
  
  const score = length >= 140 && length <= 160 ? 100 :
                length >= 120 && length <= 170 ? 80 :
                length > 0 ? 60 : 0;
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    score
  };
}

/**
 * Comprehensive content validation
 */
export function validatePageContent(
  content: {
    html: string;
    meta: { description: string; title: string };
    primaryKeyword: string;
  }
): ValidationResult {
  const results = [
    validateBrandColors(content.html),
    validateMessaging(content.html),
    validateKeywordDensity(content.html, content.primaryKeyword),
    validateHeadingStructure(content.html),
    validateMetaDescription(content.meta.description)
  ];
  
  const allErrors = results.flatMap(r => r.errors);
  const allWarnings = results.flatMap(r => r.warnings);
  const averageScore = results.reduce((sum, r) => sum + r.score, 0) / results.length;
  
  return {
    valid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings,
    score: Math.round(averageScore)
  };
}

/**
 * Generate validation report
 */
export function generateValidationReport(result: ValidationResult): string {
  let report = `Content Validation Report\n`;
  report += `${'='.repeat(50)}\n\n`;
  report += `Overall Score: ${result.score}/100\n`;
  report += `Status: ${result.valid ? '✓ PASS' : '✗ FAIL'}\n\n`;
  
  if (result.errors.length > 0) {
    report += `Errors (${result.errors.length}):\n`;
    result.errors.forEach((error, i) => {
      report += `  ${i + 1}. ${error}\n`;
    });
    report += '\n';
  }
  
  if (result.warnings.length > 0) {
    report += `Warnings (${result.warnings.length}):\n`;
    result.warnings.forEach((warning, i) => {
      report += `  ${i + 1}. ${warning}\n`;
    });
    report += '\n';
  }
  
  if (result.valid && result.warnings.length === 0) {
    report += `✓ All validation checks passed!\n`;
  }
  
  return report;
}
