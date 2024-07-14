import './App.css';

import { StrictMode } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { QueryProvider } from './context/QueryContext';
import { Router } from './Router';

export function App() {
	return (
		<StrictMode>
			<HelmetProvider>
				<Helmet defaultTitle="Upgrade" titleTemplate="%s | Upgrade" />
				<QueryProvider>
					<Router />
				</QueryProvider>
			</HelmetProvider>
		</StrictMode>
	);
}
