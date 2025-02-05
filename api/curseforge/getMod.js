const { api_max_retries, cf_base_url } = require('../constants');
const { request } = require('undici');
const logger = require('../../logger');
const { ApiCallManager } = require('../apiCallManager');

async function getMod(modId) {
	for (let i = api_max_retries; i > 0; i--) {
		ApiCallManager.trackCall('curseforge');
		try {
			return await request(`${cf_base_url}/mods/${modId}`, {
				method: 'GET',
				headers: {
					'x-api-key': process.env['CF_API_KEY'],
				},
			});
		} catch (error) {
			logger.info(`An ${error.name} has occurred while requesting data from CurseForge (Get Mod)`);
		}
	}
	return null;
}

module.exports = { getMod };