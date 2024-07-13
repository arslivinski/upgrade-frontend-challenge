import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignUpRoute } from '@/modules/sign-up/ui/SignUpRoute';

const router = createBrowserRouter([SignUpRoute]);

export function Router() {
	return <RouterProvider router={router} />;
}
