//

const utils = require('./utils');

if (process.argv.length < 3) {
	console.log('\nUsage: node app {type} {search}');
	console.log(`Type: \n
	\tlistStoresProducts
	\tlistProductStores
	\tlistNaturalResources
	\tlistGroups
	\tlistFarms
	\tlistCrops
	`);
	console.log('Search usage: \n\tnode app search {product}');
	console.log('\n\tFor example: node app search car');
	console.log('\n\n');
	return;
}

const type = process.argv[2];
// console.log('type ', type);
const search = process.argv[3];
// console.log('search ', search);

// for (let j = 0; j < process.argv.length; j++) {
// 	console.log(`${j} -> ${process.argv[j]}`);
// }

switch (type) {
	case 'listStoresProducts':
		utils.listStoresProducts();
		break;
	case 'listProductStores':
		utils.listProductStores();
		break;
	case 'listNaturalResources':
		utils.listNaturalResources();
		break;
	case 'listGroups':
		utils.listGroups();
		break;
	case 'listFarms':
		utils.listFarms();
		break;
	case 'listCrops':
		utils.listCrops();
		break;
	case 'search':
		utils.handleSearch(search);
		break;
	default:
		break;
}
