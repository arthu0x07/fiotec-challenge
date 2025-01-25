import React, { useState } from 'react';

import HeartImage from '../../assets/heart_icon.png';
import ViewImage from '../../assets/view_icon.png';
import { Aside } from '../../components/Aside';
import { Cardbutton } from '../../components/CardButton';
import { Loading } from '../../components/Loading';
import { useProjects } from '../../hooks/useProjects';

export function TopProjects() {
	const { projects, isLoading, handleAddFavorite, favoritesProjects } =
		useProjects();

	const [selectedFilter, setSelectedFilter] = useState('Todos');

	const handleFilterChange = filter => {
		setSelectedFilter(filter);
	};

	const filteredProjects =
		selectedFilter === 'Todos'
			? projects
			: projects.filter(project =>
					project.category.toLowerCase().includes(selectedFilter.toLowerCase()),
				);

	const toggleFavorite = projectId => {
		handleAddFavorite(projectId);
	};

	return (
		<div className="d-flex mt-5 flex-wrap lg-d-block flex-lg-nowrap mb-5">
			<Aside onFilterChange={handleFilterChange} />

			<div className="container p-0">
				<div className="d-flex justify-content-between align-items-center mb-4">
					<h2 className="fs-4">Projetos em Destaque</h2>
					<p className="text-muted mb-0">
						{isLoading
							? 'Carregando...'
							: `Mostrando ${filteredProjects.length} de ${projects.length} projetos`}
					</p>
				</div>

				{isLoading ? (
					<Loading />
				) : (
					<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
						{filteredProjects.map(project => (
							<div className="col" key={project.id}>
								<div className="card h-100 shadow-sm">
									<img
										src={project.image}
										className="card-img-top"
										alt={project.title}
										style={{ height: '150px', objectFit: 'cover' }}
									/>

									<div className="card-body d-flex flex-column justify-content-between ">
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
										<Cardbutton
											to={`/project/${project.id}`}
											icon={ViewImage}
											text="Visualizar"
											variant="view"
										/>

										<Cardbutton
											to={null}
											icon={HeartImage}
											text="Favoritar"
											variant="favorite"
											isActive={favoritesProjects.includes(project.id)}
											onClick={() => toggleFavorite(project.id)}
										/>
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
