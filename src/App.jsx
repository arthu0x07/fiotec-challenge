import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { ProjectsProvider } from './context/ProjectsProvider';
import { Home } from './pages/Home';
import { TopProjects } from './pages/TopProjects';

import './App.css';

export function App() {
	const [favorites, setFavorites] = useState([]);

	return (
		<>
			<ProjectsProvider>
				<Router>
					<Header />
					<div className="container d-flex flex-column mx-auto">
						<Routes>
							<Route
								path="/"
								element={
									<Home favorites={favorites} setFavorites={setFavorites} />
								}
							/>
							<Route
								path="top-projects"
								element={
									<TopProjects
										favorites={favorites}
										setFavorites={setFavorites}
									/>
								}
							/>
						</Routes>
					</div>
				</Router>
			</ProjectsProvider>
		</>
	);
}
