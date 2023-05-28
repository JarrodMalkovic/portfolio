/**
 * Utility function that interleaves the elements of an array with a given value.
 *
 * @param {any[]} arr - The array to be interleaved.
 * @param {any} x - The value to be interleaved between the elements of the array.
 *
 * @returns {any[]} The interleaved array.
 */
const interleave = (arr: any[], x: any) => arr.flatMap((e) => [e, x]).slice(0, -1);

export { interleave };
