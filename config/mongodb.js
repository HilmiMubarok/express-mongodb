const { MongoClient } = require('mongodb');

const url = 'mongodb://latihan:latihan@localhost:27017?authSource=admin';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
	try {
		await client.connect();
		console.log('Connected to MongoDB');
	} catch (err) {
		console.error(err);
	}
})();

const db = 'learn-mongodb';

module.exports = db;
