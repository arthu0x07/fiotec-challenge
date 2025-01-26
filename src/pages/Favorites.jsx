import React from 'react';

import DeleteImage from '../assets/delete_icon.png';
import { Loading } from '../components/Loading';
import { useFavorites } from '../hooks/useFavorites';
import { useProjects } from '../hooks/useProjects';

export function Favorites() {
	const { projects, isLoading } = useProjects();
	const { favorites, toggleFavorite } = useFavorites();

	const favoriteProjects = projects.filter(project =>
		favorites.includes(project.id),
	);

	if (isLoading) {
		return <Loading />;
	}

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
								<div className="d-flex flex-column gap-3 justify-content-between h-100 position-relative">
									<button
										className="border-0 m-0 p-0 position-absolute top-0 end-0 rounded-circle bg-transparent d-flex justify-content-center align-items-center"
										aria-label="Fechar"
										onClick={() => toggleFavorite(project.id)}
									>
										<img
											src={DeleteImage}
											alt="botão de fechar"
											style={{ width: '22px', height: '22px' }}
										/>
									</button>
									<h5 className="fw-bold mb-2 pe-5">{project.title}</h5>
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
