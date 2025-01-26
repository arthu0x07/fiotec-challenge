import { useState, useEffect } from 'react';

export function useFavorites() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavorites = JSON.parse(
			window.localStorage.getItem('favorites') || '[]',
		);
		setFavorites(storedFavorites);
	}, []);

	const toggleFavorite = projectId => {
		const isFavorite = favorites.includes(projectId);
		const updatedFavorites = isFavorite
			? favorites.filter(id => id !== projectId)
			: [...favorites, projectId];

		setFavorites(updatedFavorites);
		window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	};

	return { favorites, toggleFavorite };
}
