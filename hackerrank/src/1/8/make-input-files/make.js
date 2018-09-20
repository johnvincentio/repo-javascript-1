//

const fs = require('fs');

function convert(filename) {
	const data = fs.readFileSync(`${filename}.data`).toString();

	const contents = data
		.trim()
		.split('\n')
		.map(str => str.trim());
	console.error('data ', data);

	fs.writeFileSync(`${filename}.txt`, contents);
}

convert('input17');
