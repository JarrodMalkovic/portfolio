import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import PageHeading from '@/components/PageHeading';
import Pill from '@/components/Pill';
import Text from '@/components/Text';
import { GRAPHCMS_API_ENDPOINT } from '@/constants/graphCms';
import Portfolio from '@/features/projects/components/Portfolio';
import { WorkHistory } from '@/features/work/components/WorkHistory';
import useSeo from '@/hooks/useSeo';
import request from 'graphql-request';
import { HomePageContentQuery } from 'graphql/generated';
import type { NextPage } from 'next';

import HOME_PAGE_QUERY from '../queries/home.graphql';

type HomePageProps = {
	content: HomePageContentQuery;
};

const HomePage: NextPage<HomePageProps> = ({ content }) => {
	useSeo({ title: 'Jarrod Malkovic | Home' });

	return (
		<>
			<Navbar />
			<PageHeading>About me.</PageHeading>
			<Container>
				<div className="space-y-4 md:space-y-10">
					<div className="space-y-2 md:space-y-4">
						<Heading headingType="h2" size="3xl" weight="medium" className="flex">
							Hey there <span className="ml-2 animate-waving-hand"> 👋🏻</span>
						</Heading>
						<Text>
							Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
							Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
							Placeholder Placeholder Test
						</Text>
					</div>
					<div className="space-y-2 md:space-y-4">
						<Heading headingType="h2" size="2xl" weight="medium">
							Work
						</Heading>
						<WorkHistory workHistoryItems={content.works} />
					</div>
					<div className="space-y-2 md:space-y-4">
						<Heading headingType="h2" size="2xl" weight="medium">
							Skills
						</Heading>
						<div className="flex flex-wrap gap-2 md:gap-3">
							{content.skills.map((skill, idx) => (
								<Pill key={idx}>{skill.name}</Pill>
							))}
						</div>
					</div>
					<div className="space-y-2 md:space-y-4">
						<Heading headingType="h2" size="2xl" weight="medium">
							Selected Projects
						</Heading>
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
