/**
 * Converts a snake_case string to Title Case.
 *
 * @param {string} snakeCaseString - The input string in snake_case format.
 * @returns {string} - The converted string in Title Case format.
 *
 * @example - snakeToTitleCase('ana_are_mere') // Outputs: "Ana are mere"
 */
export default (snakeCaseString: string): string => {
  return snakeCaseString
    .replaceAll(/_/g, ' ')                                 // Replace underscores with spaces
    .replace(/^[-_]*(.)/, (_, c) => c.toLocaleUpperCase()) // Capitalize the first character
}

