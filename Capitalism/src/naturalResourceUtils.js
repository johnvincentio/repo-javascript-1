//

const data = require('./data');

module.exports = {
	isNaturalResource(search) {
		const n1 = data.NaturalResources.find(item => item.toLowerCase() === search.toLowerCase());
		return !!n1;
	},

	listNaturalResources(utils) {
		const arr = [];
		data.NaturalResources.forEach(resource => {
			const found = {};
			found.search = resource;
			found.type = 'Natural Resources';
			found.arr = [];
			utils.byResource(found);
			arr.push({ resource, item: found });
		});

		arr.forEach(row => {
			utils.byResourceReport(row.item);
		});
	}
};
