import React from 'react';

export function Loading() {
	return (
		<div className="text-center my-5">
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Carregando...</span>
			</div>
		</div>
	);
}
