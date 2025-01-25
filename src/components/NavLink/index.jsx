import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, children, additionalClasses = '' }) {
	const location = useLocation();
	const isActive = location.pathname === to;
	const classes = `nav-link ${isActive ? 'active text-info' : ''}`;

	return (
		<li className="nav-item">
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
