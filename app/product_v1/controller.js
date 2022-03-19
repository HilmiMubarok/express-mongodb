const db = require('../../config/mongodb');
const ObjectId = require('mongodb').ObjectId;
const path = require('path');
const fs = require('fs');

const index = (req, res) => {
	db.collection('products').find().toArray().then((result) => res.send(result)).catch((err) => res.send(err));
};

const show = (req, res) => {
	const { id } = req.params;
	db
		.collection('products')
		.findOne({ _id: ObjectId(id) })
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
};

const create = (req, res) => {
	const { name, price, stock, status } = req.body;
	const image = req.file;
	if (image) {
		const target = path.join(__dirname, '../../public/' + image.originalname);
		fs.renameSync(image.path, target);
	}
	db
		.collection('product')
		.insertOne({ name, price, stock, status, image_url: `http://localhost:5000/public/${image.originalname}` })
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
};

const update = (req, res) => {
	const { id } = req.params;
	const { name, price, stock, status } = req.body;
	const image = req.file;
	if (image) {
		const target = path.join(__dirname, '../../public/' + image.originalname);
		fs.renameSync(image.path, target);
	}
	db
		.collection('product')
		.updateOne(
			{ _id: ObjectId(id) },
			{ $set: { name, price, stock, status, image_url: `http://localhost:5000/public/${image.originalname}` } }
		)
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
};

const destroy = (req, res) => {
	const { id } = req.params;

	db
		.collection('product')
		.deleteOne({ _id: ObjectId(id) })
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy
};
