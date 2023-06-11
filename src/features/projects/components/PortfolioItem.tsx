import Card from '@/components/Card/Card';
import { ExternalLinkIcon, GithubIcon } from '@/components/Icons/Icon';
import Tooltip from '@/components/Tooltip';
import { HomePageContentQuery } from 'graphql/generated';

type PortfolioDisplayItemProps = {
	portfolioItem: HomePageContentQuery['projects'][number];
};

const PortfolioDisplayItem: React.FC<PortfolioDisplayItemProps> = ({ portfolioItem }) => {
	return (
		<Card>
			<div className="flex flex-col items-center space-y-4 text-center dark:text-slate-300">
				<h2 className="text-2xl font-medium dark:text-white">{portfolioItem.title}</h2>
				<p className="text-sm font-normal leading-6 tracking-wide">{portfolioItem.description}</p>
				{portfolioItem.skills && portfolioItem.skills.length > 0 && (
					<ul className={'flex justify-center flex-wrap gap-4'}>
						{portfolioItem.skills.map((skill, idx) => (
							<li className={'font-medium text-[12.8px]'} key={idx}>
								{skill.name}
							</li>
						))}
					</ul>
				)}
				<div className="flex justify-center gap-4">
					{portfolioItem.githubLink && (
						<Tooltip label="View code">
							<a href={portfolioItem.githubLink} target="_blank" rel="noreferrer">
								<GithubIcon />
							</a>
						</Tooltip>
					)}
					{portfolioItem.websiteLink && (
						<Tooltip label="View demo">
							<a href={portfolioItem.websiteLink} target="_blank" rel="noreferrer">
								<ExternalLinkIcon />
							</a>
						</Tooltip>
					)}
				</div>
			</div>
		</Card>
	);
};

export default PortfolioDisplayItem;
