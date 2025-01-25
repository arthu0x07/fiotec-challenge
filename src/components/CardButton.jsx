import React from 'react';
import { Link } from 'react-router-dom';

export function Cardbutton({ to, icon, text, isActive, onClick, variant }) {
	const variantClasses = {
		view: 'bg-secondary-subtle text-dark',
		favorite: isActive
			? 'bg-danger text-white border border-danger shadow'
			: 'bg-secondary-subtle text-dark',
	};

	const variantIconStyles = {
		view: {
			width: '20px',
			height: '20px',
		},
		favorite: {
			width: '20px',
			height: '20px',
			borderRadius: '50%',
			border: isActive ? '3px solid white' : 'none',
			backgroundColor: isActive ? 'white' : 'transparent',
			transition: 'all 0.3s linear',
		},
	};

	return (
		<Link
			to={to || '#'}
			className={`btn rounded-pill d-flex align-items-center justify-content-center gap-2 ${
				variantClasses[variant]
			}`}
			onClick={e => {
				if (onClick) {
					e.preventDefault();
					onClick();
				}
			}}
		>
			{icon && <img src={icon} alt={text} style={variantIconStyles[variant]} />}
			<span className={`fw-medium ${isActive ? 'text-white' : 'text-dark'}`}>
				{text}
			</span>
		</Link>
	);
}
