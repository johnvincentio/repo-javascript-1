//

const data = require('./data');

function titleCase(string) {
	return string
		.split(' ')
		.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ');
}

module.exports = {
	isProduct(search) {
		const n1 = data.ConsumerProducts.find(
			item => item.product.toLowerCase() === search.toLowerCase()
		);
		return !!n1;
	},

	byProduct(found) {
		data.ConsumerProducts.forEach(item => {
			if (item.product.toLowerCase() === found.search.toLowerCase()) {
				found.product = item;
			}
		});
	},

	byProductReport(found) {
		console.log('\n', found.type, ' ', titleCase(found.search));
		console.log(
			`\tProduct: ${titleCase(found.product.product)} (${titleCase(found.product.group)})`
		);
		found.product.input.forEach(input => {
			console.log('\tInput: ', titleCase(input));
		});
	}
};
