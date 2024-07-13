import { Helmet } from 'react-helmet-async';

const title = 'Success!';

export function SuccessPage() {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<h1>{title}</h1>
		</>
	);
}
