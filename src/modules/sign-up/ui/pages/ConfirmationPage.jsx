import { Helmet } from 'react-helmet-async';

const title = 'Confirmation';

export function ConfirmationPage() {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<h1>{title}</h1>
		</>
	);
}
