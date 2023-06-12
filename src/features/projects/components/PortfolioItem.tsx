import Card from '@/components/Card/Card';
import Heading from '@/components/Heading';
import { ExternalLinkIcon, GithubIcon } from '@/components/Icons/Icon';
import Text from '@/components/Text/Text';
import Tooltip from '@/components/Tooltip';
import { HomePageContentQuery } from 'graphql/generated';

type PortfolioDisplayItemProps = {
	portfolioItem: HomePageContentQuery['projects'][number];
};

const PortfolioDisplayItem: React.FC<PortfolioDisplayItemProps> = ({ portfolioItem }) => {
	return (
		<Card>
			<div className="flex flex-col items-center space-y-4 text-center">
				<Heading headingType="h2" size="2xl" weight="medium">
					{portfolioItem.title}
				</Heading>
				<Text size="sm">{portfolioItem.description}</Text>
				{portfolioItem.skills && portfolioItem.skills.length > 0 && (
					<div className="flex flex-wrap justify-center gap-4">
						{portfolioItem.skills.map((skill, idx) => (
							<Text size="xs" key={idx}>
								{skill.name}
							</Text>
						))}
					</div>
				)}
				<div className="flex justify-center gap-4">
					{portfolioItem.githubLink && (
						<Tooltip label="View code">
							<a
								href={portfolioItem.githubLink}
								target="_blank"
								rel="noreferrer"
								aria-label="Open project on github"
							>
								<GithubIcon />
							</a>
						</Tooltip>
					)}
					{portfolioItem.websiteLink && (
						<Tooltip label="View demo">
							<a
								href={portfolioItem.websiteLink}
								target="_blank"
								rel="noreferrer"
								aria-label="Open project website"
							>
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
