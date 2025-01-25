import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
	const [projects, setProjects] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const [favoritesProjects, setFavoritesProjects] = useState([]);

	useEffect(() => {
		const fetchProjectsWithTimeout = async () => {
			try {
				await new Promise(resolve => setTimeout(resolve, 1000));

				const response = await axios.get('http://localhost:3000/projetos');
				setProjects(response.data);
			} catch (error) {
				console.error('Erro ao buscar os projetos:', error);
			} finally {
				setisLoading(false);
			}
		};

		fetchProjectsWithTimeout();
	}, []);

	useEffect(() => {
		const favorites = JSON.parse(
			window.localStorage.getItem('favorites') || '[]',
		);
		setFavoritesProjects(favorites);
	}, [projects]);

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

	return (
		<ProjectsContext.Provider
			value={{ projects, isLoading, handleAddFavorite, favoritesProjects }}
		>
			{children}
		</ProjectsContext.Provider>
	);
}
