//

const data = require('./data');

function titleCase(string) {
	return string
		.split(' ')
		.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ');
}

module.exports = {
	isSemiProduct(search) {
		const n1 = data.SemiProducts.find(item => item.product.toLowerCase() === search.toLowerCase());
		return !!n1;
	},

	byResource(found) {
		return this.byInternalResource(found, false);
	},

	byInternalResource(found, lower) {
		// console.log('byResource; found ', found, ' lower ', lower);
		data.SemiProducts.forEach(item => {
			if (item.input.find(input => input.toLowerCase() === found.search.toLowerCase())) {
				let sub = '';
				if (this.isSemiProduct(item.product)) {
					// console.log('item.product ', item.product);
					const inner = {};
					inner.search = item.product;
					inner.type = 'Semi Product';
					inner.arr = [];
					sub = this.byInternalResource(inner, true);
				}
				found.arr.push({ SemiProducts: item, ConsumerProducts: [], sub });
			}
		});

		found.arr.forEach(row => {
			const SemiProducts = row.SemiProducts.product;
			data.ConsumerProducts.forEach(product => {
				if (product.input.find(input => input.toLowerCase() === SemiProducts.toLowerCase())) {
					row.ConsumerProducts.push(product);
				}
			});
		});

		if (!lower) {
			data.ConsumerProducts.forEach(item => {
				if (item.input.find(input => input.toLowerCase() === found.search.toLowerCase())) {
					found.arr.push({ SemiProducts: null, ConsumerProducts: [item] });
				}
			});
		}

		return found;
	},

	byResourceReport(found) {
		console.log(`\n`);
		if (found.type && found.type === 'Crops') {
			console.log(
				`${found.type}: ${titleCase(found.search)} (Sow: ${titleCase(
					found.sow
				)}, Harvest: ${titleCase(found.harvest)})`
			);
		} else {
			console.log(`${found.type}: ${titleCase(found.search)}`);
		}
		this.byResouceRows(found.arr, 1);
	},

	makeTabs(tabs, loop) {
		let result = '';
		const tab = '\t';
		const total = tabs * loop;
		for (let i = 0; i < total; i++) {
			result = result.concat(tab);
		}
		// console.log(`result :${result}:`);
		return result;
	},

	byResouceRows(rows, loop) {
		const tabs1 = this.makeTabs(1, loop);
		const tabs2 = this.makeTabs(2, loop);
		const tabs3 = this.makeTabs(3, loop);
		rows.forEach(row => {
			if (row.SemiProducts && row.SemiProducts.input.length > 0) {
				console.log(`${tabs1}Semi-Product: ${row.SemiProducts.product}`);
				row.SemiProducts.input.forEach(input => {
					console.log(`${tabs1}Input: ${titleCase(input)}`);
				});
				if (row.ConsumerProducts.length > 0) {
					row.ConsumerProducts.forEach(consumerItem => {
						console.log(
							`${tabs2}Product: ${titleCase(consumerItem.product)} (${titleCase(
								consumerItem.group
							)})`
						);
						consumerItem.input.forEach(input => {
							console.log(`${tabs3}Input: ${titleCase(input)}`);
						});
					});
				}
			} else if (row.ConsumerProducts.length > 0) {
				row.ConsumerProducts.forEach(consumerItem => {
					console.log(
						`${tabs1}Product: ${titleCase(consumerItem.product)} (${titleCase(consumerItem.group)})`
					);
					consumerItem.input.forEach(input => {
						console.log(`${tabs2}Input: ${titleCase(input)}`);
					});
				});
			}
			if (row.sub && row.sub.arr.length > 0) {
				this.byResouceRows(row.sub.arr, loop + 1);
			}
		});
	}
};
