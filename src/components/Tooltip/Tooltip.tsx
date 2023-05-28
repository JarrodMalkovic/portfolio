import * as React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';

interface IProps {
	children: React.ReactNode;
	label: string;
	placement?: any;
	showArrow?: boolean;
}

const Tooltip = ({ children, label, placement = 'top', showArrow = true }: IProps) => {
	const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } =
		usePopperTooltip({ placement });

	return (
		<div>
			<button type="button" ref={setTriggerRef}>
				{children}
			</button>
			{visible && (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({
						className:
							'text-white bg-slate-900 py-1 px-2 text-sm font-medium rounded-lg shadow-sm dark:bg-slate-700',
					})}
				>
					{label}
					{showArrow && (
						<div
							{...getArrowProps({
								className:
									'w-0 h-0 border-x-8 dark:border-x-transparent border-x-transparent border-solid dark:border-solid border-t-8 border-slate-900 dark:border-slate-700',
							})}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
