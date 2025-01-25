import { Aside } from '../../components/Aside';

export function Home({ setFavorites }) {
	return (
		<div className="d-flex mt-5 flex-wrap lg-d-block flex-lg-nowrap">
			<Aside />
			<div className="w-100 mt-5 mt-lg-0">
				<h1>Home</h1>
			</div>
		</div>
	);
}
