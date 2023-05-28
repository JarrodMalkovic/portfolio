import * as React from 'react';
import { scrollToTop } from '../../utils/scrollToTop';
import { BsLinkedin } from 'react-icons/bs';
import { GithubIcon } from '../Icons/Icon';

const Footer = () => {
	const currentDate = new Date();

	return (
		<footer className="container flex items-center justify-between h-20 max-w-6xl px-6 mx-auto text-gray-600 border-t border-t-gray-300 dark:border-t-slate-300/10 dark:text-slate-300/90 ">
			<p className="text-sm">© {currentDate.getFullYear()}, Jarrod Malkovic.</p>
			<div className="flex items-center gap-4 text-sm align-middle">
				<a href="https://www.linkedin.com/in/jarrodmalkovic/" target="_blank" rel="noreferrer">
					<BsLinkedin className="w-4 h-4 text-black dark:text-white" />
				</a>
				<a href="https://github.com/JarrodMalkovic" target="_blank" rel="noreferrer">
					<GithubIcon />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
