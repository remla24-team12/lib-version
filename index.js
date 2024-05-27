// Load the package.json file
const packageData = require('./package.json');

// Export the version number
exports.version = packageData.version;
