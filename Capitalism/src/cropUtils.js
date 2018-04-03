//

const data = require('./data');

module.exports = {
	isCrop(search) {
		const n1 = data.Crops.find(item => item.crop.toLowerCase() === search.toLowerCase());
		return !!n1;
	},

	listCrops(utils) {
		const arr = [];
		data.Crops.forEach(crop => {
			const found = {};
			found.search = crop.crop;
			found.type = 'Crops';
			found.sow = crop.sow;
			found.harvest = crop.harvest;
			found.arr = [];
			utils.byResource(found);
			arr.push({ crop, item: found });
		});

		arr.forEach(row => {
			utils.byResourceReport(row.item);
		});
	}
};
