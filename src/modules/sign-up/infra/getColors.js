import { request } from '@/infra/HttpRequest';

/**
 * @returns {Promise<Array<string>>}
 */
export function getColors() {
	return request.get('colors').json();
}
