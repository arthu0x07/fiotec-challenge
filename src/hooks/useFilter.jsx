import { useState, useMemo } from 'react';

export function useFilter(projects) {
	const [selectedFilter, setSelectedFilter] = useState('Todos');

	const filteredProjects = useMemo(() => {
		if (selectedFilter === 'Todos') return projects;

		return projects.filter(project =>
			project.category.toLowerCase().includes(selectedFilter.toLowerCase()),
		);
	}, [projects, selectedFilter]);

	const handleFilterChange = filter => setSelectedFilter(filter);

	return { filteredProjects, selectedFilter, handleFilterChange };
}
