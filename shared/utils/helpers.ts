

/**
 * Determines whether the given object has no own enumerable properties.
 *
 * @param obj - The object to check for emptiness.
 * @returns `true` if the object has no own enumerable properties, otherwise `false`.
 *
 * @example
 * ```typescript
 * isEmptyObject({}); // true
 * isEmptyObject({ key: 'value' }); // false
 * ```
 */
export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
  // Fastest way to check if an object is empty
  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  for (const key in obj) return false
  return true
}