import { HomePageContentQuery } from 'graphql/generated';
import * as React from 'react';

import PortfolioDisplayItem from './PortfolioItem';

type PortfolioProps = {
	portfolioItems: HomePageContentQuery['projects'];
};

const Portfolio: React.FC<PortfolioProps> = ({ portfolioItems }) => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
			{portfolioItems.map((portfolioItem, idx) => (
				<PortfolioDisplayItem key={idx} portfolioItem={portfolioItem} />
			))}
		</div>
	);
};

export default Portfolio;
