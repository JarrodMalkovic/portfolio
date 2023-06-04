import * as React from 'react';

import PortfolioDisplayItem from './PortfolioItem';
import { HomePageContentQuery } from 'graphql/generated';

type PortfolioProps = {
	portfolioItems: HomePageContentQuery['projects'];
};

const Portfolio: React.FC<PortfolioProps> = ({ portfolioItems }) => {
	return (
		<div className="container max-w-6xl">
			<div className="flex flex-wrap -ml-3 -mr-3">
				{portfolioItems.map((portfolioItem, idx) => (
					<PortfolioDisplayItem key={idx} portfolioItem={portfolioItem} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
