import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../assets/logo.png';
import userImage from '../assets/user_icon.png';
import { NavLink } from './NavLink';

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/top-projects', label: 'Projetos em Destaque' },
		{ path: '/favorites', label: 'Meus Favoritos' },
	];

	return (
		<header className="py-4 w-100 shadow">
			<div className="container">
				<nav className="navbar navbar-light d-flex justify-content-between align-items-center">
					<div className="relative d-flex">
						<Link className="navbar-brand d-flex align-items-center m-0" to="/">
							<img src={logoImage} alt="Fiotec Logo" />
						</Link>
						<div
							style={{
								width: '118px',
								minHeight: '0px',
								height: 'auto',
								left: '0px',
								display: 'block',
							}}
							className="d-none d-lg-block"
						/>
					</div>

					<ul className="navbar-nav d-flex flex-row pb-1 gap-4 fw-bold align-self-end fs-6 d-none d-lg-flex ms-5">
						{navLinks.map(link => (
							<NavLink key={link.path} to={link.path} additionalClasses="mx-2">
								{link.label}
							</NavLink>
						))}
					</ul>

					<Link
						to="/profile"
						className="d-flex align-items-center ms-auto d-none d-lg-flex"
					>
						<div
							className="bg-secondary-subtle rounded-circle"
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

					<button
						className="navbar-toggler d-lg-none"
						type="button"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className={`offcanvas offcanvas-end py-4 d-lg-none ${menuOpen ? 'show' : ''}`}
						tabIndex="-1"
						style={{ visibility: menuOpen ? 'visible' : 'hidden' }}
					>
						<div className="offcanvas-header">
							<h5 className="offcanvas-title">Menu</h5>
							<button
								type="button"
								className="btn-close text-reset"
								onClick={() => setMenuOpen(false)}
								aria-label="Close"
							></button>
						</div>

						<div className="offcanvas-body">
							<ul className="list-unstyled d-flex flex-column gap-4 fw-bold align-self-end fs-6">
								{navLinks.map(link => (
									<NavLink
										key={link.path}
										to={link.path}
										onClick={() => {
											setMenuOpen(false);
										}}
										additionalClasses="mx-2"
									>
										{link.label}
									</NavLink>
								))}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
