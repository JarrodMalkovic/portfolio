import { HomePageContentQuery } from 'graphql/generated';

import { WorkHistoryItem } from './WorkHistoryItem';

type WorkHistoryProps = {
	companies: HomePageContentQuery['companies'];
};

const WorkHistory: React.FC<WorkHistoryProps> = ({ companies }) => {
	return (
		<div className="space-y-4">
			{companies.map((company, idx) => (
				<WorkHistoryItem key={idx} company={company}></WorkHistoryItem>
			))}
		</div>
	);
};

export { WorkHistory };
