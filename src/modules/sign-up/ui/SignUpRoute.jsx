import { SignUpLayout } from './layouts/SignUpLayout';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { ErrorPage } from './pages/ErrorPage';
import { MoreInfoPage } from './pages/MoreInfoPage';
import { SignUpPage } from './pages/SignUpPage';
import { SuccessPage } from './pages/SuccessPage';

export const SignUpRoute = {
	path: '/',
	element: <SignUpLayout />,
	children: [
		{ path: '/', element: <SignUpPage /> },
		{ path: 'more-info', element: <MoreInfoPage /> },
		{ path: 'confirmation', element: <ConfirmationPage /> },
		{ path: 'success', element: <SuccessPage /> },
		{ path: 'error', element: <ErrorPage /> },
	],
};
