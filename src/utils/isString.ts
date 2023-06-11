/**
 * Type guard utility function to check if a value is a string.
 *
 * @param value - The value to be checked.
 *
 * @returns bool
 */
const isString = (value: unknown): value is string => typeof value === 'string';

export { isString };
