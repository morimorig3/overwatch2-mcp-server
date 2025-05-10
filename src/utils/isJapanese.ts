/**
 * Checks if a string is in Japanese.
 * @param {string} text - The string to check.
 * @returns {boolean} True if the string is in Japanese, false otherwise.
 */
export function isJapanese(text: string): boolean {
  return /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(text);
}
