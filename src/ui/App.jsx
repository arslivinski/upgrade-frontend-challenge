import './App.css';

import { StrictMode } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { Router } from './Router';

export function App() {
	return (
		<StrictMode>
			<HelmetProvider>
				<Helmet defaultTitle="Upgrade" titleTemplate="%s | Upgrade" />
				<Router />
			</HelmetProvider>
		</StrictMode>
	);
}
