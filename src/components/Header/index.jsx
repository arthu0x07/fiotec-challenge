import { Link } from 'react-router-dom';

import logoImage from '../../assets/logo.png';
import userImage from '../../assets/user_icon.png';
import NavLink from '../NavLink';

export default function Header() {
	const navLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/highlighted-projects', label: 'Projetos em Destaque' },
		{ path: '/favorites', label: 'Meus Favoritos' },
	];

	return (
		<header className="py-4">
			<nav className="header-container navbar navbar-light w-100">
				<div className="d-flex justify-content-start align-items-center w-100">
					<div className="me-5" style={{ width: '300px' }}>
						<Link className="navbar-brand d-flex align-items-center" to="/">
							<img src={logoImage} alt="Fiotec Logo" />
						</Link>
					</div>

					<ul className="navbar-nav d-flex flex-row pb-1 gap-4 fw-bold align-self-end fs-6">
						{navLinks.map(link => (
							<NavLink key={link.path} to={link.path} additionalClasses="mx-2">
								{link.label}
							</NavLink>
						))}
					</ul>

					<Link to="/profile" className="d-flex align-items-center ms-auto">
						<div
							className=" bg-secondary-subtle rounded-circle"
							style={{
								padding: '13px',
							}}
						>
							<img
								style={{
									width: '25px',
									height: '25px',
								}}
								src={userImage}
								alt="User Icon"
							/>
						</div>
					</Link>
				</div>
			</nav>
		</header>
	);
}
