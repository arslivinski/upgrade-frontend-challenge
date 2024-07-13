import { Helmet } from 'react-helmet-async';

const title = 'Error';

export function ErrorPage() {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<h1>{title}</h1>
		</>
	);
}
