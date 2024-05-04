import Text from '@/components/Text/Text';
import { differenceInMonths, differenceInYears, format, parseISO } from 'date-fns';
import { HomePageContentQuery } from 'graphql/generated';
import Image from 'next/image';

type WorkHistoryItemProps = {
	company: HomePageContentQuery['companies'][number];
};

const WorkHistoryItem: React.FC<WorkHistoryItemProps> = ({ company }) => {
	function formatDuration(start: string, end: string) {
		const startDate = parseISO(start);
		const endDate = end ? parseISO(end) : new Date();
		const years = differenceInYears(endDate, startDate);
		const months = differenceInMonths(endDate, startDate) % 12;

		let result = '';
		if (years > 0) result += `${years} yr `;
		if (months > 0) result += `${months} mos`;
		if (years === 0 && months === 0) result = '1 mos';
		return result.trim();
	}

	return (
		<div className="flex space-x-4">
			<div className="relative min-w-[40px] min-h-[40px]">
				<Image
					alt={`${company.name} logo`}
					className="rounded-lg z-50"
					height={50}
					width={50}
					src={company?.logo?.url ?? ''}
				/>
			</div>
			<div className="flex-grow">
				{company.roles.length > 1 ? (
					<div className="space-y-2">
						<div>
							<Text size="sm" weight="medium">
								{company.name}
							</Text>
							<Text size="sm" weight="normal">
								{formatDuration(
									company.roles[company.roles.length - 1].startDate,
									company.roles[0].endDate
								)}
							</Text>
							<Text size="sm" weight="normal" colour="light">
								Sydney, New South Wales, Australia
							</Text>
						</div>
						{company.roles.map((role, index) => (
							<div key={index} className="1">
								<div className="relative">
									<span className="absolute left-[-43px] top-[8px] p-1 rounded-full bg-slate-400 dark:bg-slate-100" />
									{index < company.roles.length - 1 && (
										<span className="absolute h-10 w-0.5  left-[-40px] top-[20px] bg-slate-300 dark:bg-slate-400 rounded"></span>
									)}

									<Text weight="medium">{role.title}</Text>
								</div>

								<Text weight="normal" size="sm" colour="light">
									{format(parseISO(role.startDate), 'MMM yyyy')} -{' '}
									{role.endDate ? format(parseISO(role.endDate), 'MMM yyyy') : 'Now'} ·{' '}
									{formatDuration(role.startDate, role.endDate)}
								</Text>
							</div>
						))}
					</div>
				) : (
					<>
						<Text weight="medium">{company.roles[0].title}</Text>
						<div>
							<Text size="sm" weight="normal">
								{company.name} · Full time
							</Text>
							<Text weight="normal" size="sm" colour="light">
								{format(parseISO(company.roles[0].startDate), 'MMM yyyy')} -{' '}
								{company.roles[0].endDate
									? format(parseISO(company.roles[0].endDate), 'MMM yyyy')
									: 'Now'}{' '}
								· {formatDuration(company.roles[0].startDate, company.roles[0].endDate)}
							</Text>
							<Text weight="normal" size="sm" colour="light">
								Sydney, New South Wales, Australia
							</Text>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
export { WorkHistoryItem };
