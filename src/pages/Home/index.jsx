import React from 'react';
import { Link } from 'react-router-dom';

import { useProjects } from '../../hooks/useProjects';

export function Home() {
	const { projects, loading } = useProjects();

	const news = [
		{
			title: 'Fiocruz lança podcast sobre Direitos das Pessoas com Deficiência',
		},
		{
			title: 'UNA-SUS/UFSC oferece cursos sobre Saúde do Homem',
		},
		{
			title:
				'Portaria do CNPq impacta importações para pesquisa científica em 2025',
		},
		{
			title: 'Estamos no Janeiro Branco 2025',
		},
	];

	return (
		<div className="d-flex mt-5 flex-wrap lg-d-block flex-lg-nowrap">
			<div className="w-100 mt-5 mt-lg-0">
				<div className="container my-5">
					<section className="text-center mb-5" style={{ minHeight: '50vh' }}>
						<h1 className="fw-bold">Bem-vindo à Fiotec</h1>
						<p className="lead text-muted mb-5">
							Promovendo inovação, pesquisa e desenvolvimento para apoiar a
							saúde pública.
						</p>
						<Link to={'/top-projects'} className="btn btn-primary btn-lg mt-5">
							Conheça nossos projetos
						</Link>
					</section>

					{loading && (
						<div className="text-center">
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Carregando...</span>
							</div>
						</div>
					)}

					{!loading && projects && (
						<section className="mb-5">
							<h2 className="fw-bold mb-4">Projetos em destaque</h2>
							<div className="row">
								{projects.map(project => (
									<div className="col-md-6 col-lg-4 mb-4" key={project.id}>
										<div className="card shadow-sm h-100">
											<img
												src={project.image}
												className="card-img-top"
												alt={project.title}
												style={{ height: '200px', objectFit: 'cover' }}
											/>
											<div className="card-body d-flex flex-column justify-content-between">
												<h5
													className="card-title fw-bold"
													style={{
														textOverflow: 'ellipsis',
														overflow: 'hidden',
														display: '-webkit-box',
														WebkitLineClamp: 2,
														WebkitBoxOrient: 'vertical',
													}}
												>
													{project.title}
												</h5>
												<p className="card-text mb-4">
													<strong>Natureza:</strong> {project.category}
													<br />
													<strong>Financiador:</strong> Fiocruz
												</p>
												<button className="btn btn-primary">Saiba mais</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>
					)}

					<section className="mb-5 mt-5">
						<h2 className="fw-bold mb-4">Últimas Notícias</h2>
						<div className="list-group">
							{news.map((item, index) => (
								<a
									href="#"
									className="list-group-item list-group-item-action"
									key={index}
								>
									{item.title}
								</a>
							))}
						</div>
					</section>
					<section>
						<h2 className="fw-bold mb-4">Contato</h2>
						<div className="row">
							<div className="col-md-6">
								<h5 className="fw-bold">Rio de Janeiro (Sede)</h5>
								<p>
									Avenida Brasil, 4036, Manguinhos <br />
									CEP: 21040-361 <br />
									Telefone: +55 21 4040-4418 <br />
									Horário: 8h às 17h
								</p>
							</div>
							<div className="col-md-6">
								<h5 className="fw-bold">Brasília (Escritório)</h5>
								<p>
									Avenida L3 Norte, Campus Universitário Darcy Ribeiro UNB Gleba
									A, SC4 <br />
									CEP: 70.904-970 <br />
									Telefone: +55 61 4040-4803 <br />
									Horário: 8h30 às 17h30
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
