import { request } from '@/infra/HttpRequest';

/**
 * @param {Object} data
 * @returns {Promise<void>}
 */
export function postSubmit(data) {
	return request.post('submit', { json: data });
}
