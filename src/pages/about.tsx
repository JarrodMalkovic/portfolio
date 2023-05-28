import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { WorkHistory } from '@/features/about/components/WorkHistory';
import Pill from '@/components/Pill';

const skills = [
	'TypeScript',
	'JavaScript',
	'Python',
	'React',
	'Angular',
	'Next.js',
	'GraphQL',
	'Express.js',
	'Django',
	'Git',
	'Docker',
	'SQL',
	'MySQL',
	'PostgresSQL',
];

const About: NextPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen">
			<div>
				<Navbar />
				<section className="bg-[#f2f2f2] dark:bg-[#131c33] dark:text-white pt-36 pb-16 flex-col flex justify-center items-center">
					<h1 className="text-3xl font-medium text-center">About me.</h1>
				</section>
				<div className="container max-w-6xl px-6 py-16 mx-auto space-y-12 dark:text-white">
					<div className="space-y-4">
						<h2 className="text-2xl font-medium dark:text-white">Hey there!</h2>
						<p className="font-normal leading-6 tracking-wide dark:text-slate-300">
							Placeholder
						</p>
					</div>
					<WorkHistory />
					<div className="space-y-4">
						<h2 className="text-2xl font-medium dark:text-white">Skills</h2>
						<div className="flex flex-wrap gap-3">
							{skills.map((skill, idx) => (
								<Pill key={idx}>{skill}</Pill>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
