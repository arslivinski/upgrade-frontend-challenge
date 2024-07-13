import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

import { SignUpProvider } from '../context/SignUpContext';

export function SignUpLayout() {
	return (
		<SignUpProvider>
			<Helmet defaultTitle="Sign Up | Upgrade" titleTemplate="Sign Up - %s | Upgrade" />
			<Outlet />
		</SignUpProvider>
	);
}
