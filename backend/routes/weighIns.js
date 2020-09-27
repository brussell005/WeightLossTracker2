const express = require('express');
const CurrentWeight = require('../models/post');
const user = require('../models/user');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('', checkAuth, (req, res, next) => {
	const weighIns = new CurrentWeight({
		date: req.body.date,
		weight: req.body.weight
	});
	weighIns.save().then((createdWeighIn) => {
		res.status(201).json({
			message: 'Post added successfully!',
			weighInId: createdWeighIn._id
		});
	});
});

router.put('/:id', checkAuth, (req, res, next) => {
	const weighIn = new CurrentWeight({
		_id: req.body.id,
		date: req.body.date,
		weight: req.body.weight
	});
	CurrentWeight.updateOne({ _id: req.params.id }, weighIn).then((result) => {
		console.log(result);
		res.status(200).json({ message: 'Update successful!' });
	});
});

router.get('', checkAuth, (req, res, next) => {
	CurrentWeight.find().then((documents) => {
		res.status(200).json({
			message: 'Posts fetched succesfully!',
			weighIns: documents
		});
	});
});

router.delete('/:id', checkAuth, (req, res, next) => {
	CurrentWeight.deleteOne({ _id: req.params.id }).then((result) => {
		console.log(result);
		res.status(200).json({ message: 'Post deleted!' });
	});
});

module.exports = router;
