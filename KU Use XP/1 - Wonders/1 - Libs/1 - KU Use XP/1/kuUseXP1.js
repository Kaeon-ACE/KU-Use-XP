var io = use("kaeon-united")("io");

function kuUseXP1(data) {
	return JSON.stringify(Object.keys(io)) + " - " + data;
}

module.exports = {
	kuUseXP1
};