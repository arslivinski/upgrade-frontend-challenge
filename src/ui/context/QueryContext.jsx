import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/infra/QueryClient';

/** @import { ReactNode } from 'react' */

/**
 * @param {Object} props
 * @param {ReactNode} [props.children]
 */
export function QueryProvider({ children }) {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
