import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { ProjectsProvider } from './context/ProjectsProvider';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { TopProjects } from './pages/TopProjects';

import './App.css';

export function App() {
	return (
		<>
			<ProjectsProvider>
				<Router>
					<Header />
					<div className="container d-flex flex-column mx-auto">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="top-projects" element={<TopProjects />} />
							<Route path="favorites" element={<Favorites />} />
							<Route path="project/:id" element={<ProjectDetails />} />
						</Routes>
					</div>
				</Router>
			</ProjectsProvider>
		</>
	);
}
