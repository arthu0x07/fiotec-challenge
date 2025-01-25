import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

export function App() {
	const [favorites, setFavorites] = useState([]);

	return (
		<div className="container d-flex flex-column mx-auto">
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home favorites={favorites} setFavorites={setFavorites} />}
					/>
				</Routes>
			</Router>
		</div>
	);
}
