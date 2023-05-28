import * as React from 'react';

import useTyping from 'react-typing-hook';
import { interleave } from '@/utils/interleave';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

type HeroProps = {
	skills: string[];
};

const Hero: React.FC<HeroProps> = ({ skills }) => {
	const typingRef = useTyping({
		steps: interleave(skills, 1_500),
		loop: Infinity,
		speed: 60,
	});

	return (
		<section className="bg-[#f2f2f2] dark:bg-[#131c33] dark:text-white pt-52 pb-32 space-y-3 flex-col flex justify-center items-center">
			<Heading headingType="h1" className="text-4xl font-light text-center">
				Hi. I&apos;m{' '}
				<Text textType="span" className="font-medium">
					Jarrod Malkovic.
				</Text>
			</Heading>
			<Heading headingType="h2" className="text-2xl font-light">
				I design and build{' '}
				<Text textType="span" className="font-medium">
					<span ref={typingRef}></span>
				</Text>
			</Heading>
		</section>
	);
};

export default Hero;
