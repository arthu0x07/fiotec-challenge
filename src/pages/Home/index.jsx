import { Aside } from '../../components/Aside';

export function Home({ setFavorites }) {
	return (
		<div className="d-flex mt-5">
			<Aside />
			<h1>Home</h1>
		</div>
	);
}
