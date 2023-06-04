import Tooltip from '@/components/Tooltip';
import { useTheme } from 'next-themes';
import { BsFillCircleFill, BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Tooltip
			label={theme === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}
			placement="bottom"
			showArrow={false}
		>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className="inline-flex items-center p-2 border border-transparent rounded hover:bg-gray-100 hover:dark:bg-slate-800"
			>
				{theme == undefined ? (
					<BsFillCircleFill />
				) : theme === 'dark' ? (
					<BsSunFill />
				) : (
					<BsFillMoonStarsFill />
				)}
			</button>
		</Tooltip>
	);
};

export default DarkModeToggle;
