import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjectsWithTimeout = async () => {
			try {
				await new Promise(resolve => setTimeout(resolve, 3000));

				const response = await axios.get('http://localhost:3000/projetos');
				setProjects(response.data);
			} catch (error) {
				console.error('Erro ao buscar os projetos:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchProjectsWithTimeout();
	}, []);

	return (
		<ProjectsContext.Provider value={{ projects, loading }}>
			{children}
		</ProjectsContext.Provider>
	);
}
