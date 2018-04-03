const GameData = {
	NaturalResources: [
		'Aluminum',
		'Chemical Minerals',
		'Coal',
		'Gold',
		'Iron Ore',
		'Oil',
		'Silica',
		'Silver',
		'Timber'
	],
	Farms: ['Cattle Farm', 'Chicken Farm', 'Pig Farm', 'Sheep Farm'],
	Crops: [
		{ crop: 'Cocoa', sow: 'April', harvest: 'October' },
		{ crop: 'Coconut', sow: 'August', harvest: 'April' },
		{ crop: 'Corn', sow: 'August', harvest: 'April' },
		{ crop: 'Cotton', sow: 'February', harvest: 'June' },
		{ crop: 'Flax Fiber', sow: 'August', harvest: 'April' },
		{ crop: 'Grapes', sow: 'July', harvest: 'December' },
		{ crop: 'Lemons', sow: 'August', harvest: 'April' },
		{ crop: 'Rubber', sow: 'May', harvest: 'February' },
		{ crop: 'Strawberry', sow: 'February', harvest: 'August' },
		{ crop: 'Sugar', sow: 'March', harvest: 'September' },
		{ crop: 'Tobacco', sow: 'November', harvest: 'March' },
		{ crop: 'Wheat', sow: 'August', harvest: 'April' }
	],
	SemiProducts: [
		{ product: 'Eggs', input: ['Chicken Farm'] },
		{ product: 'Leather', input: ['Cattle Farm'] },
		{ product: 'Milk', input: ['Cattle Farm'] },
		{ product: 'Leather', input: ['Pig Farm'] },
		{ product: 'Leather', input: ['Sheep Farm'] },
		{ product: 'Wool', input: ['Sheep Farm'] },

		{ product: 'Citric Acid', input: ['lemons'] },
		{ product: 'Coconut Oil', input: ['coconut'] },
		{ product: 'Corn Syrup', input: ['corn'] },
		{ product: 'Flour', input: ['wheat'] },
		{ product: 'Linen', input: ['flax fiber'] },
		{ product: 'Wheat Germ Oil', input: ['wheat'] },

		{ product: 'Car Body', input: ['glass', 'plastic', 'steel'] },
		{ product: 'CPU', input: ['Silicon'] },
		{ product: 'Dyestuff', input: ['oil', 'timber'] },
		{ product: 'Electronic Components', input: ['chemical minerals', 'silicon', 'steel'] },
		{ product: 'Engine', input: ['steel'] },
		{ product: 'Glass', input: ['silica'] },
		{ product: 'Paper', input: ['timber'] },
		{ product: 'Plastic', input: ['oil'] },
		{ product: 'Polyester', input: ['oil', 'chemical minerals'] },
		{ product: 'Silicon', input: ['silica'] },
		{ product: 'Steel', input: ['coal', 'iron ore'] },
		{ product: 'Textiles', input: ['cotton'] },
		{ product: 'Wheel & Tire', input: ['rubber, steel'] }
	],
	ConsumerProducts: [
		{
			product: 'Air Conditioner',
			group: 'Electrical Products',
			input: ['electronic components', 'steel']
		},
		{ product: 'Backpack', group: 'Sports Equipment', input: ['linen', 'polyester'] },
		{
			product: 'Bath Lotion',
			group: 'Bath Supplies',
			input: ['chemical minerals', 'coconut oil', 'plastic']
		},
		{ product: 'Bed', group: 'Furniture', input: ['timber'] },
		{ product: 'Bottled Milk', group: 'Beverages', input: ['milk', 'glass'] },
		{ product: 'bread', group: 'Food', input: ['flour'] },
		{ product: 'cakes', group: 'Dessert', input: ['eggs', 'cocoa', 'flour'] },
		{
			product: 'camera',
			group: 'Photography',
			input: ['electronic components', 'glass', 'plastic']
		},
		{
			product: 'camera film',
			group: 'Photography',
			input: ['chemical minerals', 'silver', 'plastic']
		},
		{ product: 'canned corn', group: 'Food', input: ['corn'] },
		{ product: 'canned soup', group: 'Food', input: ['frozen chicken'] },
		{ product: 'car', group: 'Automotive', input: ['car body', 'engine', 'wheel & tire'] },
		{ product: 'chair', group: 'Furniture', input: ['timber', 'textiles'] },
		{ product: 'chewing gum', group: 'Snacks', input: ['corn syrup', 'sugar'] },
		{ product: 'chocolate bar', group: 'Snacks', input: ['milk', 'cocoa'] },
		{ product: 'cigarettes', group: 'Tobacco Products', input: ['tobacco', 'paper'] },
		{ product: 'cigars', group: 'Tobacco Products', input: ['tobacco', 'paper'] },
		{ product: 'cola', group: 'Beverages', input: ['aluminum', 'sugar'] },
		{ product: 'cold tablets', group: 'Drugs', input: ['chemical minerals', 'plastic'] },
		{ product: 'cookies', group: 'Snacks', input: ['flour', 'sugar'] },
		{ product: 'corn flakes', group: 'Food', input: ['corn', 'sugar'] },
		{ product: 'cough syrup', group: 'Drugs', input: ['chemical minerals', 'plastic'] },
		{
			product: 'desktop computer',
			group: 'Computer Industry',
			input: ['CPU', 'electronic components', 'steel']
		},
		{
			product: 'detergent',
			group: 'Chemical Products',
			input: ['chemical minerals', 'citric acid', 'plastic']
		},
		{ product: 'DVD player', group: 'Electronics', input: ['Aluminum', 'electronic components'] },

		{ product: 'Eggs', group: 'Livestock Products', input: ['chicken farm'] },

		{ product: 'elegant watch', group: 'Watches', input: ['glass', 'steel'] },
		{ product: 'eye shadow', group: 'Cosmetics', input: ['chemical minerals', 'plastic'] },
		{ product: 'frozen chicken', group: 'Livestock Products', input: ['chicken farm'] },
		{ product: 'frozen beef', group: 'Livestock Products', input: ['cattle farm'] },
		{ product: 'frozen lamb', group: 'Livestock Products', input: ['sheep farm'] },
		{ product: 'frozen pork', group: 'Livestock Products', input: ['pig farm'] },
		{ product: 'fruit snacks', group: 'Snacks', input: ['strawberry'] },
		{ product: 'gold ring', group: 'Jewelry', input: ['gold'] },
		{ product: 'golf clubs', group: 'Sports Equipment', input: ['timber', 'steel'] },
		{ product: 'grape juice', group: 'Beverages', input: ['grapes', 'citric acid', 'glass'] },
		{ product: 'hair color', group: 'Cosmetics', input: ['dyestuff', 'plastic', 'wheat germ oil'] },
		{
			product: 'hand held game device',
			group: 'Toys & Video Games',
			input: ['electronic components', 'glass', 'plastic']
		},
		{ product: 'headache pills', group: 'Drugs', input: ['chemical minerals', 'plastic'] },
		{
			product: 'hi fi',
			group: 'Electrical Products',
			input: ['aluminum', 'electronic components', 'steel']
		},
		{ product: 'ice cream', group: 'Dessert', input: ['milk', 'strawberry', 'sugar'] },
		{ product: 'in-line skates', group: 'Sports Equipment', input: ['leather', 'rubber', 'steel'] },
		{ product: 'jeans', group: 'Apparel', input: ['dyestuff', 'textiles'] },
		{ product: 'leather bag', group: 'Leather Goods', input: ['leather', 'textiles'] },
		{ product: 'leather belt', group: 'Leather Goods', input: ['leather', 'steel'] },
		{ product: 'leather briefcase', group: 'Leather Goods', input: ['leather', 'textiles'] },
		{ product: 'Leather Jacket', group: 'Apparel', input: ['leather', 'textiles'] },
		{ product: 'leather wallet', group: 'Leather Goods', input: ['leather'] },
		{ product: 'lipstick', group: 'Cosmetics', input: ['dyestuff', 'plastic', 'wheat germ oil'] },
		{
			product: 'microwave',
			group: 'Electrical Products',
			input: ['electronic components', 'glass', 'plastic']
		},
		{ product: 'mobile phone', group: 'Electronics', input: ['electronic components', 'plastic'] },
		{ product: 'motorcycle', group: 'Automotive', input: ['engine', 'steel', 'wheel & tire'] },
		{
			product: 'notebook computer',
			group: 'Computer Industry',
			input: ['CPU', 'electronic components', 'plastic']
		},
		{
			product: 'palm computer',
			group: 'Computer Industry',
			input: ['CPU', 'electronic components', 'plastic']
		},
		{ product: 'perfume', group: 'Cosmetics', input: ['chemical minerals', 'glass'] },
		{ product: 'printer', group: 'Computer Industry', input: ['electronic components', 'plastic'] },
		{ product: 'sandals', group: 'Footwear', input: ['rubber'] },
		{ product: 'shampoo', group: 'Bath Supplies', input: ['chemical minerals', 'plastic'] },
		{ product: 'shoes', group: 'Footwear', input: ['leather', 'textiles'] },
		{ product: 'silver necklace', group: 'Jewelry', input: ['silver'] },
		{ product: 'soap', group: 'Bath Supplies', input: ['citric acid', 'coconut oil', 'paper'] },
		{ product: 'socks', group: 'Footwear', input: ['wool'] },
		{ product: 'sofa', group: 'Furniture', input: ['leather', 'cotton', 'timber'] },
		{ product: 'sport shoes', group: 'Footwear', input: ['cotton', 'rubber', 'polyester'] },
		{
			product: 'sports watch',
			group: 'Watches',
			input: ['electronic components', 'glass', 'plastic']
		},
		{ product: 'sweater', group: 'Apparel', input: ['wool', 'dyestuff'] },
		{
			product: 'television',
			group: 'Electrical Products',
			input: ['electronic components', 'glass', 'plastic']
		},
		{
			product: 'toilet cleaner',
			group: 'Chemical Products',
			input: ['chemical minerals', 'plastic']
		},
		{ product: 'toothpaste', group: 'Chemical Products', input: ['chemical minerals', 'plastic'] },
		{ product: 'toy doll', group: 'Toys & Video Games', input: ['cotton', 'dyestuff', 'textiles'] },
		{
			product: 'toy racing car',
			group: 'Toys & Video Games',
			input: ['electronic components', 'plastic']
		},
		{
			product: 'video camera',
			group: 'Electronics',
			input: ['electronic components', 'glass', 'plastic']
		},
		{
			product: 'video game console',
			group: 'Toys & Video Games',
			input: ['electronic components', 'plastic']
		},
		{
			product: 'video recorder',
			group: 'Electronics',
			input: ['electronic components', 'glass', 'steel']
		},
		{ product: 'wine', group: 'Beverages', input: ['grapes', 'glass'] },
		{ product: 'yogurt', group: 'Dessert', input: ['milk', 'strawberry', 'citric acid'] }
	]
};

module.exports = GameData;
