import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import PageHeading from '@/components/PageHeading';
import Pill from '@/components/Pill';
import { GRAPHCMS_API_ENDPOINT } from '@/constants/graphCms';
import Portfolio from '@/features/projects/components/Portfolio';
import { WorkHistory } from '@/features/work/components/WorkHistory';
import useTitle from '@/hooks/useTitle';
import request from 'graphql-request';
import { HomePageContentQuery } from 'graphql/generated';
import type { NextPage } from 'next';

import HOME_PAGE_QUERY from '../queries/home.graphql';

type HomePageProps = {
	content: HomePageContentQuery;
};

const HomePage: NextPage<HomePageProps> = ({ content }) => {
	useTitle('Jarrod Malkovic | Home');

	return (
		<>
			<Navbar />
			<PageHeading>About me.</PageHeading>
			<Container>
				<div className="space-y-12">
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
			</Container>
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
