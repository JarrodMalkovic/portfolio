import * as React from 'react';

import { classNames } from '@/utils/classNames';
import PortfolioDisplayItem from './PortfolioItem';
import { PortfolioItem } from '../models/portfolio';

type PortfolioProps = {
	portfolioItems: PortfolioItem[];
};

const Portfolio: React.FC<PortfolioProps> = ({ portfolioItems }) => {
	return (
		<div className="container max-w-6xl px-6 pt-10 pb-10 mx-auto lg:pt-16 lg:pb-16 md:pt-20 md:pb-20">
			<div className="flex flex-wrap -ml-3 -mr-3">
				{portfolioItems.map((portfolioItem, idx) => (
					<PortfolioDisplayItem key={idx} portfolioItem={portfolioItem} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
