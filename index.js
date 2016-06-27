'use strict';

require('babel-core/register')({});
require.extensions['.css'] = () => {
	return;
};
var server = require('./server').default;
const PORT = process.env.PORT || 9000;

server.listen(PORT, function () {
	console.log('Server listening on', PORT);
});
