import React, { useState } from 'react';

const filters = [
	{ label: 'Todos', value: 'all' },
	{ label: 'Ensino', value: 'ensino' },
	{ label: 'Pesquisa', value: 'pesquisa' },
	{ label: 'Estímulo à Inovação', value: 'inovacao' },
	{ label: 'Extensão', value: 'extensao' },
	{ label: 'Desenvolvimento Institucional', value: 'institucional' },
	{ label: 'Desenvolvimento Científico e Tecnológico', value: 'cientifico' },
];

const handleFilterClick = value => {
	console.log('Filtro selecionado:', value);
};

export function Aside() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<>
			<div className="d-none d-lg-block">
				<div
					className="card me-5 py-4 px-4 bg-body-tertiary"
					style={{ width: '298px' }}
				>
					<h4 className="card-title fw-bold fs-5">Filtrar por categoria</h4>
					<ul className="list-unstyled mt-3 pb-8 flex-column gap-2 d-flex fs-6 fw-medium">
						{filters.map(filter => (
							<li key={filter.value}>
								<a
									href="#"
									className="text-decoration-none text-dark"
									onClick={() => handleFilterClick(filter.value)}
								>
									{filter.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="w-100 d-lg-none">
				<div className="d-lg-none w-25">
					<div className="dropdown">
						<button
							className="btn btn-secondary w-100"
							type="button"
							onClick={toggleDropdown}
						>
							Filtrar por categoria
						</button>
						<ul
							className={`dropdown-menu ${dropdownOpen ? 'd-block' : 'd-none'}`}
							aria-labelledby="dropdownMenuButton"
						>
							{filters.map(filter => (
								<li key={filter.value}>
									<a
										className="dropdown-item"
										href="#"
										onClick={() => handleFilterClick(filter.value)}
									>
										{filter.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
