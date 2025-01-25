import { Link } from 'react-router-dom';

export function Home({ setFavorites }) {
	const projects = [
		{
			title: 'Combate à doença de Chagas na América Latina',
			nature: 'Pesquisa',
			funder: 'Fiocruz',
		},
		{
			title:
				'Conhecimento protege: formação de defensores dos direitos LGBTQIA+',
			nature: 'Ensino',
			funder: 'Fiocruz',
		},
		{
			title: 'Profilaxia Pré-Exposição (PrEP) no combate ao HIV',
			nature: 'Pesquisa',
			funder: 'Unitaid',
		},
		{
			title:
				'Fiocruz garante soberania nacional na produção da vacina contra Covid-19',
			nature: 'Estímulo à Inovação',
			funder: 'Fiocruz',
		},
	];

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
						<Link
							to={'/highlighted-projects'}
							className="btn btn-primary btn-lg mt-5"
						>
							Conheça nossos projetos
						</Link>
					</section>

					<section className="mb-5">
						<h2 className="fw-bold mb-4">Projetos em destaque</h2>
						<div className="row">
							{projects.map((project, index) => (
								<div className="col-md-6 col-lg-4 mb-4" key={index}>
									<div className="card shadow-sm h-100">
										<div className="card-body">
											<h5 className="card-title fw-bold">{project.title}</h5>
											<p className="card-text">
												<strong>Natureza:</strong> {project.nature}
												<br />
												<strong>Financiador:</strong> {project.funder}
											</p>
											<button className="btn btn-primary">Saiba mais</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className="mb-5">
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
