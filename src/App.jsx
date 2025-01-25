import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';

export function App() {
	const [favorites, setFavorites] = useState([]);

	return (
		<>
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
					</Routes>
				</div>
			</Router>
		</>
	);
}
