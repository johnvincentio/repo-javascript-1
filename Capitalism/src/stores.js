//

const data = [
	{
		product: 'Air Conditioner',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Backpack',
		type: ['Department Store', 'Discount Megastore', 'Sports Store']
	},

	{
		product: 'Bath Lotion',
		type: [
			'Department Store',
			'Discount Megastore',
			'Supermarket',
			'Convenience Store',
			'Cosmetic Store',
			'Drug Store'
		]
	},
	{
		product: 'Bed',
		type: ['Department Store', 'Discount Megastore', 'Furniture Store']
	},
	{
		product: 'Bottled Milk',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Bread',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Cakes',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Camera',
		type: [
			'Department Store',
			'Discount Megastore',
			'Supermarket',
			'Convenience Store',
			'Hardware Store'
		]
	},
	{
		product: 'Camera Film',
		type: [
			'Department Store',
			'Discount Megastore',
			'Supermarket',
			'Convenience Store',
			'Hardware Store'
		]
	},
	{
		product: 'Canned Corn',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Canned Soup',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Car',
		type: ['Automobile Outlet']
	},
	{
		product: 'Chair',
		type: ['Department Store', 'Discount Megastore', 'Furniture Store']
	},
	{
		product: 'Chewing Gum',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Chocolate Bar',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Cigarettes',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Cigars',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Cola',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Cold Tablets',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store', 'Drug Store']
	},
	{
		product: 'Cookies',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Corn Flakes',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Cough Syrup',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store', 'Drug Store']
	},
	{
		product: 'DVD Player',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Desktop Computer',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store', 'Computer Store']
	},
	{
		product: 'Detergent',
		type: ['Discount Megastore', 'Supermarket']
	},
	{
		product: 'Eggs',
		type: ['Supermarket', 'Convenience Store']
	},
	{
		product: 'Elegant Watch',
		type: ['Department Store', 'Jewelry + Watch Store']
	},
	{
		product: 'Eye Shadow',
		type: ['Department Store', 'Discount Megastore', 'Cosmetic Store', 'Drug Store']
	},
	{
		product: 'Frozen Beef',
		type: ['Supermarket', 'Convenience Store']
	},
	{
		product: 'Frozen Chicken',
		type: ['Supermarket', 'Convenience Store']
	},
	{
		product: 'Frozen Lamb',
		type: ['Supermarket', 'Convenience Store']
	},
	{
		product: 'Frozen Pork',
		type: ['Supermarket', 'Convenience Store']
	},
	{
		product: 'Fruit Snacks',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Gold Ring',
		type: ['Department Store', 'Jewelry + Watch Store']
	},
	{
		product: 'Golf Clubs',
		type: ['Department Store', 'Discount Megastore', 'Sports Store']
	},
	{
		product: 'Grape Juice',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Hair Color',
		type: ['Department Store', 'Discount Megastore', 'Cosmetic Store', 'Drug Store']
	},
	{
		product: 'Handheld Game Device',
		type: ['Department Store', 'Discount Megastore', 'Toy Store']
	},
	{
		product: 'Headache Pills',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store', 'Drug Store']
	},
	{
		product: 'Hi-Fi',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Ice Cream',
		type: ['Discount Megastore', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'In-line Skates',
		type: ['Department Store', 'Discount Megastore', 'Sports Store']
	},
	{
		product: 'Jeans',
		type: ['Department Store', 'Discount Megastore', 'Apparel Store']
	},
	{
		product: 'Leather Bag',
		type: ['Department Store', 'Discount Megastore', 'Leather Store']
	},
	{
		product: 'Leather Belt',
		type: ['Department Store', 'Discount Megastore', 'Leather Store']
	},
	{
		product: 'Leather Briefcase',
		type: ['Department Store', 'Discount Megastore', 'Leather Store']
	},
	{
		product: 'Leather Jacket',
		type: ['Department Store', 'Discount Megastore', 'Apparel Store']
	},
	{
		product: 'Leather Wallet',
		type: ['Department Store', 'Discount Megastore', 'Leather Store']
	},
	{
		product: 'Lipstick',
		type: ['Department Store', 'Discount Megastore', 'Cosmetic Store', 'Drug Store']
	},
	{
		product: 'Microwave',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Mobile Phone',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Motorcycle',
		type: ['Automobile Outlet']
	},
	{
		product: 'Notebook Computer',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store', 'Computer Store']
	},
	{
		product: 'Palm Computer',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store', 'Computer Store']
	},
	{
		product: 'Perfume',
		type: ['Department Store', 'Discount Megastore', 'Cosmetic Store', 'Drug Store']
	},
	{
		product: 'Printer',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store', 'Computer Store']
	},
	{
		product: 'Sandals',
		type: ['Department Store', 'Discount Megastore', 'Footwear Store']
	},
	{
		product: 'Shampoo',
		type: [
			'Department Store',
			'Discount Megastore',
			'Supermarket',
			'Convenience Store',
			'Cosmetic Store',
			'Drug Store'
		]
	},
	{
		product: 'Shoes',
		type: ['Department Store', 'Discount Megastore', 'Footwear Store']
	},
	{
		product: 'Silver Necklace',
		type: ['Department Store', 'Jewelry + Watch Store']
	},
	{
		product: 'Soap',
		type: [
			'Department Store',
			'Discount Megastore',
			'Supermarket',
			'Convenience Store',
			'Cosmetic Store',
			'Drug Store'
		]
	},
	{
		product: 'Socks',
		type: ['Department Store', 'Discount Megastore', 'Footwear Store']
	},
	{
		product: 'Sofa',
		type: ['Department Store', 'Discount Megastore', 'Furniture Store']
	},
	{
		product: 'Sport Shoes',
		type: ['Department Store', 'Discount Megastore', 'Footwear Store']
	},
	{
		product: 'Sports Watch',
		type: ['Department Store', 'Jewelry + Watch Store']
	},
	{
		product: 'Sweater',
		type: ['Department Store', 'Discount Megastore', 'Apparel Store']
	},
	{
		product: 'Television',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Toilet Cleaner',
		type: ['Discount Megastore', 'Supermarket']
	},
	{
		product: 'Toothpaste',
		type: ['Discount Megastore', 'supermarket']
	},
	{
		product: 'Toy Doll',
		type: ['Department Store', 'Discount Megastore', 'Toy Store']
	},
	{
		product: 'Toy Racing Car',
		type: ['Department Store', 'Discount Megastore', 'Toy Store']
	},
	{
		product: 'Video Camera',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Video Game Console',
		type: ['Department Store', 'Discount Megastore', 'Toy Store']
	},
	{
		product: 'Video Recorder',
		type: ['Department Store', 'Discount Megastore', 'Hardware Store']
	},
	{
		product: 'Wine',
		type: ['Department Store', 'Supermarket', 'Convenience Store']
	},
	{
		product: 'Yogurt',
		type: ['Department Store', 'Supermarket', 'Convenience Store']
	}
];

const costs = [
	{
		type: 'Discount Megastore',
		build: '$1,800,000',
		monthly: '$180,000'
	},
	{
		type: 'Department Store',
		build: '$1,000,000',
		monthly: '$100,000'
	},
	{
		type: 'Supermarket',
		build: '$1,000,000',
		monthly: '$100,000'
	},
	{
		type: 'Convenience Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Drug Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Apparel Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Automobile Outlet',
		build: '$1,000,000',
		monthly: '$100,000'
	},
	{
		type: 'Hardware Store',
		build: '$1,000,000',
		monthly: '$100,000'
	},
	{
		type: 'Footwear Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Jewelry + Watch Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Leather Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Computer Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Cosmetic Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Furniture Store',
		build: '$1,000,000',
		monthly: '$100,000'
	},
	{
		type: 'Sports Store',
		build: '$500,000',
		monthly: '$50,000'
	},
	{
		type: 'Toy Store',
		build: '$500,000',
		monthly: '$50,000'
	}
];

module.exports = { data, costs };
