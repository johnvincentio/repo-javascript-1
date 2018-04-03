//

const groupUtils = require('./groupUtils');
const productUtils = require('./productUtils');
const farmUtils = require('./farmUtils');
const cropUtils = require('./cropUtils');
const naturalResourceUtils = require('./naturalResourceUtils');
const resourceUtils = require('./resourceUtils');
const storeUtils = require('./storeUtils');

/* eslint-disable class-methods-use-this */

module.exports = {
	listProductStores() {
		storeUtils.listProductStores();
	},

	listStoresProducts() {
		storeUtils.listStoresProducts();
	},

	listGroups() {
		groupUtils.listGroups();
	},

	listFarms() {
		farmUtils.listFarms(this);
	},

	listCrops() {
		cropUtils.listCrops(this);
	},

	listNaturalResources() {
		naturalResourceUtils.listNaturalResources(this);
	},

	byResource(found) {
		return resourceUtils.byResource(found);
	},

	byResourceReport(found) {
		resourceUtils.byResourceReport(found);
	},

	handleSearch(search) {
		const found = {};
		found.search = search;
		found.arr = [];
		if (productUtils.isProduct(search)) {
			found.type = 'Product';
			productUtils.byProduct(found);
			if (found) {
				productUtils.byProductReport(found);
				return;
			}
		}

		if (groupUtils.isGroup(search)) {
			found.type = 'Group';
			groupUtils.byGroup(found);
			if (found) {
				groupUtils.byGroupReport(found);
				return;
			}
		}

		if (naturalResourceUtils.isNaturalResource(search)) {
			found.type = 'Natural Resource';
		} else if (cropUtils.isCrop(search)) {
			found.type = 'Crop';
		} else if (farmUtils.isFarm(search)) {
			found.type = 'Farm';
		} else if (resourceUtils.isSemiProduct(search)) {
			found.type = 'Semi Product';
		} else {
			console.log('search ', search, ' not found.');
			return;
		}

		resourceUtils.byResource(found);
		if (found) {
			resourceUtils.byResourceReport(found);
		}
	}
};
