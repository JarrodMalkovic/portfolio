import Image from 'next/image';
import { WorkHistoryItem } from '../models/work-history';

type WorkHistoryItemProps = {
	workHistoryItem: WorkHistoryItem;
};

const WorkHistoryItem: React.FC<WorkHistoryItemProps> = ({ workHistoryItem }) => {
	return (
		<div className="flex space-x-4">
			<div>
				<Image
					className="rounded"
					height={40}
					width={40}
					alt={workHistoryItem.imageAlt}
					src={workHistoryItem.image}
				></Image>
			</div>
			<div className="space-y-2">
				<div>
					<h4 className="font-medium dark:text-white">{workHistoryItem.title}</h4>
					<h5 className="font-normal text-gray-600 dark:text-slate-400 text-md">
						{workHistoryItem.description}
					</h5>
				</div>
			</div>
		</div>
	);
};

export { WorkHistoryItem };
