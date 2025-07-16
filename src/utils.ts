/**
 * Detect if running in production environment
 */
export function isProduction(): boolean {
  // Check Node.js environment
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NODE_ENV === 'production';
  }

  return false;
}