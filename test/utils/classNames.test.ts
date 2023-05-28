import { classNames } from '../../src/utils/classNames';

it('returns the correct full class name when given mutliple class names', async () => {
	const expected = 'classA classB classC';
	const result = classNames('classA', 'classB', 'classC');

	expect(result).toEqual(expected);
});

it('returns the correct full class name when given mutliple class names', async () => {
	const expected = 'classA classC';
	const result = classNames('classA', false && 'classB', 'classC');

	expect(result).toEqual(expected);
});

it('returns the correct full class name when given mutliple class names', async () => {
	const expected = 'classA classB classC';
	const result = classNames('classA', true && 'classB', 'classC');

	expect(result).toEqual(expected);
});
