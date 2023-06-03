import useDarkMode from '@/hooks/useDarkMode';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import Tooltip from '@/components/Tooltip';

const DarkModeToggle = () => {
	const [isDark, setIsDark] = useDarkMode();

	return (
		<Tooltip
			label={isDark ? 'Disable Dark Mode' : 'Enable Dark Mode'}
			placement="bottom"
			showArrow={false}
		>
			<button
				onClick={() => setIsDark(!isDark)}
				className="inline-flex items-center p-2 border border-transparent rounded hover:bg-gray-100 hover:dark:bg-slate-800"
			>
				{isDark ? <BsSunFill /> : <BsFillMoonStarsFill />}
			</button>
		</Tooltip>
	);
};

export default DarkModeToggle;
