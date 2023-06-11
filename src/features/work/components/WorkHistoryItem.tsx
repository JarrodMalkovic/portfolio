import { HomePageContentQuery } from 'graphql/generated';
import Image from 'next/image';

type WorkHistoryItemProps = {
	workHistoryItem: HomePageContentQuery['works'][number];
};

const WorkHistoryItem: React.FC<WorkHistoryItemProps> = ({ workHistoryItem }) => {
	return (
		<div className="flex space-x-4">
			<div className="min-w-[40px] min-h-[40px]">
				<Image
					alt=""
					className="rounded"
					height={40}
					width={40}
					src={workHistoryItem.logo.url}
				></Image>
			</div>
			<div className="space-y-2">
				<div>
					<p className="font-medium dark:text-white">{workHistoryItem.title}</p>
					<p className="font-normal text-gray-600 dark:text-slate-400 text-md">
						{workHistoryItem.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export { WorkHistoryItem };
