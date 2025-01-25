import React from 'react';
import { Link } from 'react-router-dom';

import { Aside } from '../../components/Aside';
import { useProjects } from '../../hooks/useProjects';

export function TopProjects() {
	const { projects, isLoading } = useProjects();

	return (
		<div className="d-flex mt-5 flex-wrap lg-d-block flex-lg-nowrap mb-5">
			<Aside />
			<div className="container">
				<div className="d-flex justify-content-between align-items-center mb-4">
					<h2 className="fs-4">Projetos em Destaque</h2>
					<p className="text-muted">
						{isLoading
							? 'Carregando...'
							: `Mostrando ${projects.length} de ${projects.length} projetos`}
					</p>
				</div>

				{isLoading ? (
					<div className="text-center my-5">
						<div className="spinner-border text-primary" role="status">
							<span className="visually-hidden">Carregando...</span>
						</div>
					</div>
				) : (
					<div className="row row-cols-1 row-cols-md-3 g-4">
						{projects.map(project => (
							<div className="col" key={project.id}>
								<div className="card h-100 shadow-sm">
									<img
										src={project.image}
										className="card-img-top"
										alt={project.title}
										style={{ height: '150px', objectFit: 'cover' }}
									/>

									<div className="card-body d-flex flex-column justify-content-between">
										<h5 className="card-title text-center mb-4">
											{project.title}
										</h5>
										<p
											className="card-text text-muted text-center align-self-end"
											style={{
												textOverflow: 'ellipsis',
												overflow: 'hidden',
												display: '-webkit-box',
												WebkitLineClamp: 4,
												WebkitBoxOrient: 'vertical',
											}}
										>
											{project.description}...
										</p>
									</div>

									<div className="card-footer d-flex justify-content-between">
										<Link
											to={`/project/${project.id}`}
											className="btn btn-outline-primary"
										>
											Acessar
										</Link>
										<button className="btn btn-outline-danger">
											<span role="img" aria-label="favorite">
												❤️
											</span>
											Favoritar
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
