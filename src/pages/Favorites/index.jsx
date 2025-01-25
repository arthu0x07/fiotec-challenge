import React from 'react';

import { useProjects } from '../../hooks/useProjects';

export function Favorites() {
	const { projects, favoritesProjects } = useProjects();

	const favoriteProjects = projects.filter(project =>
		favoritesProjects.includes(project.id),
	);

	return (
		<div className="mt-5">
			<h2 className="fs-5 mb-5 fw-bold">Meus Favoritos</h2>

			{favoriteProjects.length === 0 ? (
				<p className="text-muted">Você ainda não favoritou nenhum projeto.</p>
			) : (
				<div className="d-flex flex-column gap-4">
					{favoriteProjects.map(project => (
						<div
							className="row align-items-start gap-3 gap-lg-0 pb-3"
							key={project.id}
						>
							<div className="col-12 col-lg-3">
								<img
									src={project.image}
									alt={project.title}
									className="w-100"
									style={{ height: 'fit-content', objectFit: 'cover' }}
								/>
							</div>

							<div className="col-12 col-lg-9">
								<div className="d-flex flex-column gap-3 justify-content-between h-100">
									<h5 className="fw-bold mb-2">{project.title}</h5>
									<p className="text-muted mb-0">{project.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
