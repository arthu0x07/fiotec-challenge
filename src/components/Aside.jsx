export function Aside({ to, children, additionalClasses = '' }) {
	return (
		<div
			className="card me-5 py-4 px-4 bg-body-tertiary"
			style={{ width: '298px' }}
		>
			<h4 className="card-title fw-bold fs-5">Filtrar por categoria</h4>

			<ul className="list-unstyled mt-3 pb-8 flex-column gap-2 d-flex fs-6 fw-medium">
				<li>
					<a href="#" className="text-decoration-none text-dark">
						Todos
					</a>
				</li>
				<li>
					<a href="#" className="text-decoration-none text-dark">
						Ensino
					</a>
				</li>
				<li>
					<a href="#" className="text-decoration-none text-dark">
						Pesquisa
					</a>
				</li>
				<li>
					<a href="#" className="text-decoration-none text-dark">
						Estímulo à Inovação
					</a>
				</li>
				<li>
					<a href="#" className="text-decoration-none text-dark">
						Extensão
					</a>
				</li>
				<li>
					<a href="#" className="text-decoration-none text-dark">
						Desenvolvimento Institucional
					</a>
				</li>
				<li>
					<a href="#" className="text-decoration-none text-dark">
						Desenvolvimento Científico e Tecnológico
					</a>
				</li>
			</ul>
		</div>
	);
}
