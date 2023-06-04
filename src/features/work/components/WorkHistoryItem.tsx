import Image from 'next/image';
import { HomePageContentQuery } from 'graphql/generated';

type WorkHistoryItemProps = {
	workHistoryItem: HomePageContentQuery['works'][number];
};

const WorkHistoryItem: React.FC<WorkHistoryItemProps> = ({ workHistoryItem }) => {
	return (
		<div className="flex space-x-4">
			<div>
				<Image className="rounded" height={40} width={40} src={workHistoryItem.logo.url}></Image>
			</div>
			<div className="space-y-2">
				<div>
					<h4 className="font-medium dark:text-white">{workHistoryItem.title}</h4>
					<h5 className="font-normal text-gray-600 dark:text-slate-400 text-md">
						<span></span>
						{workHistoryItem.description}
					</h5>
				</div>
			</div>
		</div>
	);
};

export { WorkHistoryItem };
