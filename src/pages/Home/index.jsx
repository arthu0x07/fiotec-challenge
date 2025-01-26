import React from 'react';
import { Link } from 'react-router-dom';

import { Loading } from '../../components/Loading';
import { SmallProjectCard } from '../../components/SmallProjectCard';
import { useProjects } from '../../hooks/useProjects';

export function Home() {
	const { projects, isLoading } = useProjects();

	const news = [
		{
			title: 'Fiocruz lança podcast sobre Direitos das Pessoas com Deficiência',
			link: 'https://www.fiotec.fiocruz.br/noticias/outros/8810-fiocruz-lanca-podcast-sobre-direitos-das-pessoas-com-deficiencia',
		},
		{
			title: 'UNA-SUS/UFSC oferece cursos sobre Saúde do Homem',
			link: 'https://www.fiotec.fiocruz.br/noticias/outros/8805-una-sus-ufsc-oferece-cursos-sobre-saude-do-homem',
		},
		{
			title:
				'Portaria do CNPq impacta importações para pesquisa científica em 2025',
			link: 'https://www.fiotec.fiocruz.br/noticias/institucionais/8825-portaria-do-cnpq-impacta-importacoes-para-pesquisa-cientifica-em-2025',
		},
		{
			title: 'Estamos no Janeiro Branco 2025',
			link: 'https://www.fiotec.fiocruz.br/noticias/outros/8821-estamos-no-janeiro-branco-2025',
		},
	];

	const contactInfo = [
		{
			location: 'Rio de Janeiro (Sede)',
			address: 'Avenida Brasil, 4036, Manguinhos',
			postalCode: 'CEP: 21040-361',
			phone: '+55 21 4040-4418',
			hours: 'Horário: 8h às 17h',
		},
		{
			location: 'Brasília (Escritório)',
			address:
				'Avenida L3 Norte, Campus Universitário Darcy Ribeiro UNB Gleba A, SC4',
			postalCode: 'CEP: 70.904-970',
			phone: '+55 61 4040-4803',
			hours: 'Horário: 8h30 às 17h30',
		},
	];

	return (
		<div className="mt-5">
			<section
				className="d-flex flex-column justify-content-center align-items-center text-center py-5"
				style={{ minHeight: '90vh' }}
			>
				<div className="container d-flex flex-column align-items-sm-center align-items-md-start ">
					<h1 className="fw-bold display-3 mb-4 ali text-md-start text-center">
						<span className="text-info">Fiotec:</span> Transformando Ideias em
						Ações
					</h1>
					<p className="lead mb-5 fs-4 text-md-start text-center">
						Inovação, pesquisa e desenvolvimento para a saúde pública e o
						bem-estar da sociedade.
					</p>
					<div className="d-flex gap-3 justify-content-center">
						<Link
							to="/top-projects"
							className="btn bg-info btn-lg px-4 py-3 text-light"
						>
							Conheça Nossos Projetos
						</Link>
					</div>
				</div>
			</section>

			<section className="my-5">
				<div className="container">
					<h2 className="fw-bold text-center mb-5 fs-5">
						Projetos em Destaque
					</h2>
					{isLoading ? (
						<Loading />
					) : (
						<div className="row g-4">
							{projects.slice(0, 6).map(project => (
								<SmallProjectCard key={project.id} project={project} />
							))}
						</div>
					)}
				</div>
			</section>

			<section className="my-5 bg-light py-5">
				<div className="container">
					<h2 className="fw-bold text-center mb-5">Últimas Notícias</h2>
					<div className="list-group">
						{news.map((item, index) => (
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="list-group-item list-group-item-action"
								key={index}
							>
								{item.title}
							</a>
						))}
					</div>
				</div>
			</section>

			<section className="my-5">
				<div className="container">
					<h2 className="fw-bold text-center mb-5">Contato</h2>
					<div className="row g-4">
						{contactInfo.map((info, index) => (
							<div className="col-md-6" key={index}>
								<h5 className="fw-bold">{info.location}</h5>
								<p>
									{info.address}
									<br />
									{info.postalCode}
									<br />
									Telefone: {info.phone}
									<br />
									{info.hours}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
