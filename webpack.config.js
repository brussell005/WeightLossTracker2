var nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	externals: [ nodeExternals() ] // in order to ignore all modules in node_modules folder
};
