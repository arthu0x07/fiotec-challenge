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
							<div className="col mb-5" key={project.id}>
								<div className="h-100 w-100">
									<img
										src={project.image}
										alt={project.title}
										className="w-100 mb-2"
										style={{ height: '180px', objectFit: 'cover' }}
									/>

									<div className="card-body d-flex flex-column justify-content-between ">
										<h5
											className="card-title text-center mb-4 fw-bold fs-5"
											style={{ height: '4.5rem' }}
										>
											{project.title}
										</h5>
										<p
											className="text-muted text-center align-self-end mb-4 fw-medium fs-5"
											style={{
												display: '-webkit-box',
												WebkitLineClamp: 3,
												WebkitBoxOrient: 'vertical',
												overflow: 'hidden',
											}}
										>
											{project.description}...
										</p>
									</div>

									<div className="d-flex justify-content-center w-100 gap-2">
										<Cardbutton
											to={`/project/${project.id}`}
											icon={ViewImage}
											text="Acessar"
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
