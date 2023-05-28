import type { NextPage } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Hero from '@/features/landing/components/Hero';
import Portfolio from '@/features/portfolio/components/Portfolio';

const skills = ['Websites', 'Extensions', 'Webapps'];

const items = [
	{
		description: 'Placeholder',
		name: 'Auction Website',
		skills: ['Next.js', 'React', 'Node.js'],
	},
	{
		description: 'Placeholder',
		name: 'Placeholder',
		skills: ['Next.js', 'React', 'Node.js'],
	},
	{
		description: 'Placeholder',
		name: 'Live Emotes',
		skills: ['Next.js', 'React', 'Node.js'],
	},
];

const Home: NextPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen">
			<div>
				<Navbar />
				<Hero skills={skills} />
				<Portfolio portfolioItems={items} />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
