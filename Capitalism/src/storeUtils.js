//

const { data, costs } = require('./stores');

function titleCase(string) {
	return string
		.split(' ')
		.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ');
}

module.exports = {
	listProductStores() {
		data.forEach(product => {
			console.log(`\tProduct: ${titleCase(product.product)}`);
			product.type.forEach(input => {
				console.log(`\t\tStores: ${titleCase(input)}`);
			});
		});
	},

	listStoresProducts() {
		const arr = [];
		data.forEach(product => {
			// console.log(`\tProduct: ${titleCase(product.product)}`);
			product.type.forEach(input => {
				const row = arr.find(item => item.type.toLowerCase() === input.toLowerCase());
				if (row) {
					row.products.push(product.product);
				} else {
					const store = costs.find(item => item.type.toLowerCase() === input.toLowerCase());
					arr.push({
						type: input,
						build: store.build,
						monthly: store.monthly,
						products: [product.product]
					});
				}
			});
		});

		arr.sort((a, b) => {
			if (a.type < b.type) return -1;
			if (a.type > b.type) return 1;
			return 0;
		});

		arr.forEach(row => {
			console.log(`\nType: ${titleCase(row.type)} (Build: ${row.build}, Monthly: ${row.monthly})`);
			row.products.forEach(product => {
				console.log(`\tProduct: ${titleCase(product)}`);
			});
		});
	}
};
