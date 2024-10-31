var httpUtils = use("kaeon-united")("httpUtils");

function kuUseXP2(data) {
	return JSON.stringify(Object.keys(httpUtils)) + " - " + data;
}

module.exports = {
	kuUseXP2
};