/**
 * Utility function for generating a string of class names based on the provided arguments.
 *
 * @param {...(string | boolean)} classes - The class names to include in the generated string.
 *
 * @returns {string} The concatenated class names string.
 */
const classNames = (...classes: (string | boolean)[]): string => classes.filter(Boolean).join(' ');

export { classNames };
