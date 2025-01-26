import React from 'react';
import { Link } from 'react-router-dom';

export function SmallProjectCard({ project }) {
	return (
		<div className="col-md-6 col-lg-4">
			<div className="card shadow-sm h-100">
				<img
					src={project.image}
					className="card-img-top"
					alt={project.title}
					style={{ height: '200px', objectFit: 'cover' }}
				/>
				<div className="card-body d-flex flex-column">
					<h5
						className="card-title fw-bold mb-2 text-truncate"
						style={{ maxHeight: '3.6rem', overflow: 'hidden' }}
					>
						{project.title}
					</h5>
					<p className="card-text">
						<strong>Natureza:</strong> {project.category}
						<br />
						<strong>Financiador:</strong> Fiocruz
					</p>
					<Link
						to={`/project/${project.id}`}
						className="btn btn-primary mt-auto"
					>
						Ver Detalhes
					</Link>
				</div>
			</div>
		</div>
	);
}
