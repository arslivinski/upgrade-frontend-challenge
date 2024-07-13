import { Helmet } from 'react-helmet-async';

const title = 'Additional Info';

export function MoreInfoPage() {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<h1>{title}</h1>
		</>
	);
}
