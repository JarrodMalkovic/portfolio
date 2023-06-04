import { HomePageContentQuery } from 'graphql/generated';

import { WorkHistoryItem } from './WorkHistoryItem';

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
