/**
 * Security utilities for safe serialization, input validation, and XSS/injection prevention.
 */

const SAFE_MAILTO_RECIPIENTS = new Set([
  'info@fatturafacile.eu',
  'scuole@fatturafacile.eu',
  'supporto@fatturafacile.eu',
]);

/**
 * Safely serializes a Schema.org JSON-LD payload and escapes HTML-sensitive characters
 * (`<`, `>`, `&`, `\u2028`, `\u2029`) to prevent script breakout or XSS injection.
 */
export function serializeJsonLd(
  schema: Record<string, unknown> | Array<Record<string, unknown>>,
): string {
  return JSON.stringify(schema)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

/**
 * Sanitizes untrusted plain-text input by stripping control characters and angle brackets,
 * trimming whitespace, and enforcing a strict maximum length.
 */
export function sanitizePlainText(input: unknown, maxLength = 500): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\p{Cc}<>]/gu, '')
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates an email address using linear-time string checks (ReDoS-safe, zero backtracking).
 */
export function isValidEmail(email: string): boolean {
  const clean = email.trim();
  if (clean.length < 5 || clean.length > 254 || clean.includes(' ')) return false;
  const atIndex = clean.indexOf('@');
  if (atIndex <= 0 || atIndex !== clean.lastIndexOf('@')) return false;
  const localPart = clean.slice(0, atIndex);
  const domainPart = clean.slice(atIndex + 1);
  if (!localPart || domainPart.length < 3) return false;
  const dotIndex = domainPart.lastIndexOf('.');
  return dotIndex > 0 && dotIndex < domainPart.length - 2;
}

/**
 * Constructs a validated `mailto:` URI restricted to allowlisted project recipients.
 */
export function buildSafeMailtoUrl(recipient: string, subject: string, body: string): string {
  const targetEmail = SAFE_MAILTO_RECIPIENTS.has(recipient) ? recipient : 'info@fatturafacile.eu';
  const cleanSubject = encodeURIComponent(sanitizePlainText(subject, 160));
  const cleanBody = encodeURIComponent(sanitizePlainText(body, 3000));
  return `mailto:${targetEmail}?subject=${cleanSubject}&body=${cleanBody}`;
}
