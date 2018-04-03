//

const data = require('./data');

module.exports = {
	isFarm(search) {
		const n1 = data.Farms.find(item => item.toLowerCase() === search.toLowerCase());
		return !!n1;
	},

	listFarms(utils) {
		const arr = [];
		data.Farms.forEach(farm => {
			const found = {};
			found.search = farm;
			found.type = 'Farms';
			found.arr = [];
			utils.byResource(found);
			arr.push({ farm, item: found });
		});

		arr.forEach(row => {
			utils.byResourceReport(row.item);
		});
	}
};
