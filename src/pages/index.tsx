import type { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import { WorkHistory } from '@/features/work/components/WorkHistory';
import Pill from '@/components/Pill';
import Portfolio from '@/features/projects/components/Portfolio';
import useTitle from '@/hooks/useTitle';
import request, { gql } from 'graphql-request';
import { GRAPHCMS_API_ENDPOINT } from '@/constants/graphCms';
import HOME_PAGE_QUERY from '../queries/home.graphql';
import { HomePageContentQuery } from 'graphql/generated';

type HomePageProps = {
	content: HomePageContentQuery;
};

const HomePage: NextPage<HomePageProps> = ({ content }) => {
	useTitle('Jarrod Malkovic | Home');

	return (
		<>
			<Navbar />
			<section className="bg-[#f2f2f2] dark:bg-[#131c33] dark:text-white pt-36 pb-16 flex-col flex justify-center items-center">
				<h1 className="text-3xl font-medium text-center">About me.</h1>
			</section>
			<div className="container max-w-6xl px-6 py-16 mx-auto space-y-12 dark:text-white">
				<div className="space-y-4">
					<h2 className="text-2xl font-medium dark:text-white">Hey there!</h2>
					<p className="font-normal leading-6 tracking-wide dark:text-slate-300">Placeholder</p>
				</div>
				<div className="space-y-4">
					<h2 className="text-2xl font-medium dark:text-white">Work</h2>
					<WorkHistory workHistoryItems={content.works} />
				</div>
				<div className="space-y-4">
					<h2 className="text-2xl font-medium dark:text-white">Skills</h2>
					<div className="flex flex-wrap gap-3">
						{content.skills.map((skill, idx) => (
							<Pill key={idx}>{skill.name}</Pill>
						))}
					</div>
				</div>
				<div className="space-y-4">
					<h2 className="text-2xl font-medium dark:text-white">Selected Projects</h2>
					<Portfolio portfolioItems={content.projects} />
				</div>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const homePageContentResponse = await request<HomePageContentQuery>(
		GRAPHCMS_API_ENDPOINT,
		HOME_PAGE_QUERY
	);

	return {
		props: {
			content: homePageContentResponse,
		},
	};
};

export default HomePage;
