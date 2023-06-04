import { ExternalLinkIcon, GithubIcon } from '@/components/Icons/Icon';
import Tooltip from '@/components/Tooltip';
import { HomePageContentQuery } from 'graphql/generated';

type PortfolioDisplayItemProps = {
	portfolioItem: HomePageContentQuery['projects'][number];
};

const PortfolioDisplayItem: React.FC<PortfolioDisplayItemProps> = ({ portfolioItem }) => {
	return (
		<div className="lg:w-[calc(100%/3)] md:w-[50%] w-[100%]  px-3 py-3">
			<div className="shadow-[0px_6px_15px_0px_rgba(100,100,111,0.35)] dark:shadow-xl hover:-translate-y-2 duration-[250ms] dark:bg-[#131c33] top-0 rounded-lg p-8">
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
						<Tooltip label="View code">
							<a href="https://github.com" target="_blank" rel="noreferrer">
								<GithubIcon />
							</a>
						</Tooltip>
						<Tooltip label="View demo">
							<a href="https://github.com" target="_blank" rel="noreferrer">
								<ExternalLinkIcon />
							</a>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioDisplayItem;
