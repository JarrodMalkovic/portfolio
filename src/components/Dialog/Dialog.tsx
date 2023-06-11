import { classNames } from '@/utils/classNames';
import React, { useState } from 'react';

type DialogProps = {
	open: boolean;
	onClose?: () => void;
	children: React.ReactNode;
	className?: string;
};

const Dialog: React.FC<DialogProps> = ({ open, onClose, children, className }) => {
	const handleClose = React.useCallback(() => {
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	const handleOverlayClick = React.useCallback(
		(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			if (event.target === event.currentTarget) {
				handleClose();
			}
		},
		[handleClose]
	);

	const handleEscapeKey = React.useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleClose();
			}
		},
		[handleClose]
	);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
			document.addEventListener('keydown', handleEscapeKey);
		} else {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleEscapeKey);
		}

		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [open, handleEscapeKey]);

	return (
		<>
			{open && (
				<div
					className={classNames(
						'fixed inset-0 z-50 overflow-y-auto sm:hidden min-h-screen',
						className != null && className
					)}
				>
					<div
						className="fixed inset-0 min-h-screen bg-black opacity-30"
						onClick={handleOverlayClick}
					/>
					{children}
				</div>
			)}
		</>
	);
};

export default Dialog;
