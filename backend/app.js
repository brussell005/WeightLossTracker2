const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const weighInRoutes = require('./routes/weighIns');
const userRoutes = require('./routes/user');

const app = express();

mongoose
	.connect(
		'mongodb+srv://Brien:MK9hPBgHqwD4pFyV@weightlossapp.1svse.mongodb.net/node-angular?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connected to database!');
	})
	.catch(() => {
		console.log('Connection failed!');
	});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	next();
});

app.use('/api/posts', weighInRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
