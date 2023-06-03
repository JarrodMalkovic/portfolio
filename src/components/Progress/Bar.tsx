interface IProps {
	progress: number;
	animationDuration: number;
}

const Bar = ({ animationDuration, progress }: IProps) => {
	return (
		<div
			className="fixed top-0 left-0 z-50 w-full h-0.5 bg-cyan-400"
			style={{
				marginLeft: `${(-1 + progress) * 100}%`,
				transition: `margin-left ${animationDuration}ms linear`,
			}}
		/>
	);
};

export default Bar;
