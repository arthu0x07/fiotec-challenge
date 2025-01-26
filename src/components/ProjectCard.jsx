import React from 'react';

export function ProjectCard({ project }) {
	return (
		<div className="card shadow-sm h-100">
			<img
				src={project.image}
				alt={project.title}
				className="card-img-top"
				style={{ height: '200px', objectFit: 'cover' }}
			/>
			<div className="card-body">
				<h5 className="fw-bold">{project.title}</h5>
				<p>{project.category}</p>
			</div>
		</div>
	);
}
