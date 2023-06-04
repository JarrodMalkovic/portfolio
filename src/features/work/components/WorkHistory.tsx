import { HomePageContentQuery } from 'graphql/generated';

import { WorkHistoryItem } from './WorkHistoryItem';

const workHistoryItems = [
	{
		title: 'Software Engineer',
		description: 'Freelancer.com · Sydney, NSW · Mar. 2022 - Now',
		image: '/images/freelancer-logo.jpg',
		imageAlt: 'Freelancer.com logo',
	},
	{
		title: 'Software Engineer Intern',
		description: 'Freelancer.com · Sydney, NSW · Dec. 2021 - Feb 2022',
		image: '/images/freelancer-logo.jpg',
		imageAlt: 'Freelancer.com logo',
	},
];

type WorkHistoryProps = {
	workHistoryItems: HomePageContentQuery['works'];
};

const WorkHistory: React.FC<WorkHistoryProps> = ({ workHistoryItems }) => {
	return (
		<div className="space-y-4">
			{workHistoryItems.map((workHistoryItem, idx) => (
				<WorkHistoryItem key={idx} workHistoryItem={workHistoryItem}></WorkHistoryItem>
			))}
		</div>
	);
};

export { WorkHistory };
