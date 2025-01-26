import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Aside } from '../components/Aside';
import { Loading } from '../components/Loading';
import { useFilter } from '../hooks/useFilter';
import { useProjects } from '../hooks/useProjects';

export function ProjectDetails() {
	const { id } = useParams();
	const navigate = useNavigate();

	const { projects, isLoading } = useProjects();
	const { handleFilterChange } = useFilter(projects);

	const project = projects.find(project => project.id == parseInt(id));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	if (!project) {
		return (
			<div className="container text-center mt-5">
				<h2 className="fw-bold">Projeto não encontrado</h2>
				<p className="text-muted">O projeto solicitado não existe.</p>
			</div>
		);
	}

	const onFilterClick = filter => {
		handleFilterChange(filter);
		navigate('/top-projects');
	};

	return (
		<div className="d-flex mt-5 flex-wrap lg-d-block flex-lg-nowrap mb-5">
			<Aside
				onFilterChange={filter => {
					onFilterClick(filter);
				}}
			/>

			<div className="container mb-5 p-0">
				<h2 className="fs-5 fw-bold mb-5">Projetos em Destaque</h2>

				<h1 className="fw-bold mb-4 fs-4 mt-5">{project.title}</h1>
				<img
					src={project.image}
					alt={project.title}
					className="img-fluid rounded mb-4 w-100"
				/>
				<p className="text-muted">{project.description}</p>
			</div>
		</div>
	);
}
