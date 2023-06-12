import DarkModeToggle from '@/components/DarkModeToggle';
import Switch from '@/components/Switch';
import useStickyNavbar from '@/hooks/useStickyNavbar';
import { classNames } from '@/utils/classNames';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import Dialog from '../Dialog';

const links = [
	{
		href: '/',
		name: 'Home',
	},
	{
		href: '/contact',
		name: 'Contact',
	},
] as const;

interface MobileNavigationMenuProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	setTheme: (value: string) => void;
	theme?: string;
}

const MobileNavigationMenu: React.FC<MobileNavigationMenuProps> = ({
	isOpen,
	setIsOpen,
	setTheme,
	theme,
}) => {
	const router = useRouter();

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className="fixed inset-0 z-50 overflow-y-auto sm:hidden"
		>
			<div className="flex items-center justify-center min-h-screen">
				<div className="fixed w-56 bg-white rounded-md top-4 right-4 dark:bg-slate-700">
					<button
						onClick={() => setIsOpen(false)}
						className="absolute flex items-center top-4 right-4 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
						aria-label="Close menu"
					>
						<XIcon aria-label="Close mobile navigation menu" className="w-5 h-5" />
					</button>

					<div className="divide-y dark:divide-slate-600 divide-slate-200">
						<div className="py-1">
							{links.map(({ href, name }, idx) => (
								<div key={idx} className="px-4 py-2">
									<Link
										aria-current={router.pathname === href ? 'page' : undefined}
										aria-label={`Go to ${name} page`}
										href={href}
										onClick={() => setIsOpen(false)}
										className="dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
									>
										{name}
									</Link>
								</div>
							))}
						</div>
						<div className="py-1">
							<div className="flex items-center justify-between px-4 py-2 align-center">
								<p className="dark:text-slate-300 text-slate-600">Dark Mode</p>
								<Switch
									checked={theme === 'dark'}
									onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Dialog>
	);
};

const Navbar = () => {
	const isSticky = useStickyNavbar();
	const [isOpen, setIsOpen] = React.useState(false);
	const { theme, setTheme } = useTheme();
	const router = useRouter();

	return (
		<nav
			className={classNames(
				'bg-white/95 z-40 h-20 flex items-center fixed backdrop-blur px-6 dark:bg-slate-900/75 w-full border-b border-b-gray-200 dark:border-b-slate-300/10',
				isSticky && 'shadow-lg'
			)}
		>
			<div className="flex w-full h-20 transition">
				<div className="align-items text-black dark:text-white container mx-auto max-w-[1111px] flex justify-between items-center">
					<Link href="/" className="text-xl font-semibold" aria-label="Go to home page">
						JMALKOVIC.
					</Link>

					<div>
						<div className="items-center hidden gap-1 text-md sm:flex">
							{links.map(({ href, name }, idx) => (
								<Link
									aria-current={router.pathname === href ? 'page' : undefined}
									aria-label={`Go to ${name} page`}
									key={idx}
									href={href}
									className={classNames(
										'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 py-1 px-3 rounded-lg',
										router.pathname === href &&
											'bg-gray-100 dark:bg-slate-800 text-black dark:text-white'
									)}
								>
									{name}
								</Link>
							))}
							<DarkModeToggle />
						</div>
						<div className="sm:hidden">
							<button className="flex" onClick={() => setIsOpen(true)}>
								<MenuIcon
									aria-label="Open mobile navigation menu"
									className="flex w-5 h-5 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100"
								/>
							</button>
							<MobileNavigationMenu
								theme={theme}
								setTheme={setTheme}
								setIsOpen={setIsOpen}
								isOpen={isOpen}
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
