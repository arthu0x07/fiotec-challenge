import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
	const [projects, setProjects] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [favoritesProjects, setFavoritesProjects] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState('Todos');
	const [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				await new Promise(resolve => setTimeout(resolve, 1000));

				const response = await axios.get('http://localhost:3000/projetos');
				setProjects(response.data);
			} catch (error) {
				console.error('Erro ao buscar os projetos:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchProjects();
	}, []);

	useEffect(() => {
		const favorites = JSON.parse(
			window.localStorage.getItem('favorites') || '[]',
		);
		setFavoritesProjects(favorites);
	}, [projects]);

	useEffect(() => {
		if (selectedFilter === 'Todos') {
			setFilteredProjects(projects);
		} else {
			setFilteredProjects(
				projects.filter(project =>
					project.category.toLowerCase().includes(selectedFilter.toLowerCase()),
				),
			);
		}
	}, [selectedFilter, projects]);

	const handleAddFavorite = projectId => {
		const isAlreadyFavorite = favoritesProjects.includes(projectId);

		if (isAlreadyFavorite) {
			const updatedFavorites = favoritesProjects.filter(id => id !== projectId);
			window.localStorage.setItem(
				'favorites',
				JSON.stringify(updatedFavorites),
			);
			setFavoritesProjects(updatedFavorites);
		} else {
			const updatedFavorites = [...favoritesProjects, projectId];
			window.localStorage.setItem(
				'favorites',
				JSON.stringify(updatedFavorites),
			);
			setFavoritesProjects(updatedFavorites);
		}
	};

	const handleFilterChange = filter => {
		setSelectedFilter(filter);
	};

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				isLoading,
				handleAddFavorite,
				favoritesProjects,
				filteredProjects,
				selectedFilter,
				handleFilterChange,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
}
