interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
	return (
		<label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300" {...rest}>
			{children}
		</label>
	);
};

export default Label;
