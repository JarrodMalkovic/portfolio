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

const WorkHistory = () => {
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-medium dark:text-white">Work</h2>
			<div className="space-y-4">
				{workHistoryItems.map((workHistoryItem, idx) => (
					<WorkHistoryItem key={idx} workHistoryItem={workHistoryItem}></WorkHistoryItem>
				))}
			</div>
		</div>
	);
};

export { WorkHistory };
