const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const log = require('morgan');
const productRouterV1 = require('./app/product_v1/routes');

app.use(cors());
app.use(log('dev'));

// use url encoded
app.use(express.urlencoded({ extended: true }));

// use express.json
app.use(express.json());

// express static path join uploads folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/api/v1', productRouterV1);

app.get('/', (req, res) => {
	res.json({ message: 'Hello World. Welcome to Express x Mongo' });
});

// Not found middleware
app.use((req, res, next) => {
	res.status(404);
	res.json({
		status: 404,
		message: 'Resource ' + req.originalUrl + ' Not Found'
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
