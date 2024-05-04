import * as React from 'react';

import Heading from '../Heading/Heading';
import ParticleBackground from '../ParticleBackground';

interface PageHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({ children, ...rest }) => {
	const [showParticles, setShowParticles] = React.useState(false);

	React.useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)');
		const handleResize = () => {
			setShowParticles(mediaQuery.matches);
		};

		handleResize();
		mediaQuery.addListener(handleResize);

		return () => mediaQuery.removeListener(handleResize);
	}, []);

	return (
		<section
			className="relative bg-[#f2f2f2] dark:bg-[#131c33] dark:text-white pb-12 pt-32 md:pt-34 md:pb-14 flex-col flex justify-center items-center"
			{...rest}
		>
			{showParticles && (
				<div className="absolute w-full">
					<ParticleBackground />
				</div>
			)}
			<Heading headingType="h1" size="3xl" weight="medium">
				{children}
			</Heading>
		</section>
	);
};

export default PageHeading;
