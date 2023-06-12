import Text from '@/components/Text/Text';
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
					<Text weight="medium">{workHistoryItem.title}</Text>
					<Text colour="light">{workHistoryItem.description}</Text>
				</div>
			</div>
		</div>
	);
};

export { WorkHistoryItem };
