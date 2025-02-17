import { Link, useLocation } from 'react-router-dom';

export function NavLink({ to, children, onClick }) {
	const location = useLocation();
	const isActive = location.pathname === to;
	const classes = `nav-link ${isActive ? 'active text-info' : ''}`;

	return (
		<li
			className="nav-item text-center d-flex align-items-center"
			onClick={onClick}
		>
			<Link
				className={classes}
				to={to}
				aria-current={isActive ? 'page' : undefined}
			>
				{children}
			</Link>
		</li>
	);
}
