//

const data = require('./data');

/* eslint-disable class-methods-use-this */

function titleCase(string) {
	return string
		.split(' ')
		.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ');
}

module.exports = {
	isGroup(search) {
		const n1 = data.ConsumerProducts.find(
			item => item.group.toLowerCase() === search.toLowerCase()
		);
		return !!n1;
	},

	byGroup(found) {
		found.products = [];
		data.ConsumerProducts.forEach(item => {
			if (item.group.toLowerCase() === found.search.toLowerCase()) {
				found.products.push(item);
			}
		});
	},

	byGroupReport(found) {
		console.log('\n', found.type, ' ', titleCase(found.search));
		found.products.forEach(product => {
			console.log(`\tProduct: ${titleCase(product.product)}`);
			product.input.forEach(input => {
				console.log('\t\tInput: ', titleCase(input));
			});
		});
	},

	listGroups() {
		const arr = [];
		data.ConsumerProducts.forEach(product => {
			const group = titleCase(product.group);
			const row = arr.find(item => item.group.toLowerCase() === group.toLowerCase());
			if (row) {
				row.products.push({ product: product.product, input: product.input });
			} else {
				arr.push({ group, products: [{ product: product.product, input: product.input }] });
			}
		});
		arr.sort((a, b) => {
			if (a.group < b.group) return -1;
			if (a.group > b.group) return 1;
			return 0;
		});

		const productsCount1 = data.ConsumerProducts.length;
		const productsCount2 = arr.reduce((sum, item) => sum + item.products.length, 0);
		if (productsCount1 !== productsCount2) {
			console.log('Incorrect product counts - abort');
			console.log('productsCount1 ', productsCount1, ' productsCount2 ', productsCount2);
			return;
		}

		arr.forEach(group => {
			console.log('\nGroup: ', titleCase(group.group));
			group.products.forEach(product => {
				console.log(`\tProduct: ${titleCase(product.product)}`);
				product.input.forEach(input => {
					console.log('\t\tInput: ', titleCase(input));
				});
			});
		});
	}
};
