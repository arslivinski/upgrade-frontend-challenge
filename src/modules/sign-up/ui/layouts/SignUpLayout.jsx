import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

export function SignUpLayout() {
	return (
		<>
			<Helmet defaultTitle="Sign Up | Upgrade" titleTemplate="Sign Up - %s | Upgrade" />
			<Outlet />
		</>
	);
}
