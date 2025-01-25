import React, { useState } from 'react';

const filters = [
	{ label: 'Todos', value: 'Todos' },
	{ label: 'Ensino', value: 'Ensino' },
	{ label: 'Pesquisa', value: 'Pesquisa' },
	{ label: 'Estímulo à Inovação', value: 'Estímulo à Inovação' },
	{ label: 'Extensão', value: 'Extensão' },
	{
		label: 'Desenvolvimento Institucional',
		value: 'Desenvolvimento Institucional',
	},
	{
		label: 'Desenvolvimento Científico e Tecnológico',
		value: 'Desenvolvimento Científico e Tecnológico',
	},
];

export function Aside({ onFilterChange }) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleFilterClick = value => {
		onFilterChange(value);
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
									onClick={e => {
										e.preventDefault();
										handleFilterClick(filter.value);
									}}
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
						<div>
							<button
								className="btn btn-secondary w-100 mb-4"
								type="button"
								onClick={toggleDropdown}
							>
								Filtrar por categoria
							</button>
						</div>
						<ul
							className={`dropdown-menu mt-n5 ${dropdownOpen ? 'd-block' : 'd-none'}`}
							aria-labelledby="dropdownMenuButton"
						>
							{filters.map(filter => (
								<li key={filter.value}>
									<a
										className="dropdown-item"
										href="#"
										onClick={e => {
											e.preventDefault();
											dropdownOpen && toggleDropdown();
											handleFilterClick(filter.value);
										}}
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
