const generateObjectId = () => {
	const objectIdLength = 24;
	const chars = '0123456789abcdef';
	let objectId = '';

	for (let i = 0; i < objectIdLength; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		objectId += chars[randomIndex];
	}

	return objectId;
};

// const mongoLikeObjectId = generateObjectId()
// console.log(mongoLikeObjectId);

module.exports = {
	generateObjectId
}