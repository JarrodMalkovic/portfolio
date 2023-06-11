import Tooltip from '@/components/Tooltip';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { BsFillCircleFill, BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => setIsMounted(true), []);

	return (
		<Tooltip
			label={theme === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}
			placement="bottom"
			showArrow={false}
		>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className="inline-flex items-center p-2 ml-2 border border-transparent rounded-lg hover:bg-gray-100 hover:dark:bg-slate-800"
			>
				{isMounted ? (
					theme === 'dark' ? (
						<BsSunFill />
					) : (
						<BsFillMoonStarsFill />
					)
				) : (
					<BsFillCircleFill />
				)}
			</button>
		</Tooltip>
	);
};

export default DarkModeToggle;
