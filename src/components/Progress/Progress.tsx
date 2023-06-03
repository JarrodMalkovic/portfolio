import { useNProgress } from '@tanem/react-nprogress';

import Bar from './Bar';
import ProgressContainer from './ProgressContainer';

interface IProps {
	isAnimating: boolean;
}

const Progress = ({ isAnimating }: IProps) => {
	const { animationDuration, isFinished, progress } = useNProgress({
		isAnimating,
	});

	return (
		<ProgressContainer isFinished={isFinished} animationDuration={animationDuration}>
			<Bar animationDuration={animationDuration} progress={progress} />
		</ProgressContainer>
	);
};

export default Progress;
