var io = use("kaeon-united")("io");

function kuUseXP(data) {
	return JSON.stringify(Object.keys(io)) + " - " + data;
}

module.exports = {
	kuUseXP
};