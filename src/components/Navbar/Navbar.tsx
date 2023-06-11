import DarkModeToggle from '@/components/DarkModeToggle';
import useStickyNavbar from '@/hooks/useStickyNavbar';
import { classNames } from '@/utils/classNames';
import { Switch } from '@headlessui/react';
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
];

const Navbar = () => {
	const isSticky = useStickyNavbar();
	const [isOpen, setIsOpen] = React.useState(true);
	const { theme, setTheme } = useTheme();
	const router = useRouter();

	return (
		<nav
			className={classNames(
				'bg-white/95 z-40 h-20 flex items-center fixed backdrop-blur px-6 dark:bg-slate-900/75  w-full border-b border-b-gray-200 dark:border-b-slate-300/10',
				isSticky ? 'shadow-lg' : ''
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
									key={idx}
									href={href}
									aria-current={router.pathname === href ? 'page' : undefined}
									className={classNames(
										'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 py-1 px-3 rounded-lg',
										router.pathname === href &&
											'bg-gray-100 dark:bg-slate-800 text-black dark:text-white'
									)}
									aria-label={`Go to ${name} page`}
								>
									{name}
								</Link>
							))}
							<DarkModeToggle />
						</div>
						<div className="sm:hidden">
							<button className="flex" onClick={() => setIsOpen(true)}>
								<MenuIcon className="flex w-5 h-5 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100" />
							</button>
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
										>
											<XIcon className="w-5 h-5" />
										</button>

										<div className="divide-y dark:divide-slate-600 divide-slate-200">
											<div className="py-1">
												{links.map(({ href, name }, idx) => (
													<div key={idx} className="px-4 py-2">
														<Link
															href={href}
															onClick={() => setIsOpen(false)}
															className=" dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
															aria-label={`Go to ${name} page`}
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
														className="relative inline-flex items-center justify-center w-8 h-4 rounded-full cursor-pointer group shrink-0"
													>
														<span className="sr-only">Use setting</span>
														<span
															aria-hidden="true"
															className="absolute w-full h-full rounded-md pointer-events-none"
														/>
														<span
															aria-hidden="true"
															className={classNames(
																theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200',
																'pointer-events-none absolute h-4 w-8 mx-auto rounded-full  transition-colors ease-in-out duration-200'
															)}
														/>
														<span
															aria-hidden="true"
															className={classNames(
																theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
																'pointer-events-none absolute left-0 inline-block h-4 w-4 border  dark:shadow dark:border-slate-900 border-slate-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
															)}
														/>
													</Switch>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Dialog>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
