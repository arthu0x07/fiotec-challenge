import React, { useEffect } from 'react';

import HeartImage from '../../assets/heart_icon.png';
import ViewImage from '../../assets/view_icon.png';
import { Aside } from '../../components/Aside';
import { Cardbutton } from '../../components/CardButton';
import { Loading } from '../../components/Loading';
import { useFavorites } from '../../hooks/useFavorites';
import { useFilter } from '../../hooks/useFilter';
import { useProjects } from '../../hooks/useProjects';

export function TopProjects() {
	const { isLoading, error, projects } = useProjects();
	const { filteredProjects, selectedFilter, handleFilterChange } =
		useFilter(projects);

	const { favorites, toggleFavorite } = useFavorites();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (isLoading) return <Loading />;
	if (error) return <p className="text-danger text-center">{error}</p>;

	return (
		<div className="d-flex mt-5 flex-wrap lg-d-block flex-lg-nowrap mb-5">
			<Aside onFilterChange={handleFilterChange} />
			<div className="container p-0">
				<div className="d-flex justify-content-between align-items-center mb-4">
					<h2 className="fs-5 fw-bold">Projetos em Destaque</h2>
					<p className="text-muted mb-0">
						Mostrando {filteredProjects.length} projetos
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

									<div className="card-body d-flex flex-column justify-content-between">
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
											text="Acessar"
											icon={ViewImage}
											variant="view"
										/>

										<Cardbutton
											to={null}
											text="Favoritar"
											variant="favorite"
											icon={HeartImage}
											isActive={favorites.includes(project.id)}
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
