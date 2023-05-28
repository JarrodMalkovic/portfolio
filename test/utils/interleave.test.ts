import { interleave } from '../../src/utils/interleave';

it('returns the correct full class name when given mutliple class names', async () => {
	const expected: never[] = [];
	const result = interleave([], 1);

	expect(result).toEqual(expected);
});

it('returns the correct full class name when given mutliple class names', async () => {
	const expected = ['a', 1, 'b', 1, 'c'];
	const result = interleave(['a', 'b', 'c'], 1);

	expect(result).toEqual(expected);
});
