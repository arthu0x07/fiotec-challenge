import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get('http://localhost:3000/projetos');
				setProjects(response.data);
			} catch (err) {
				setError('Erro ao carregar os projetos. Tente novamente mais tarde.');
			} finally {
				setIsLoading(false);
			}
		};

		fetchProjects();
	}, []);

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				isLoading,
				error,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
}
