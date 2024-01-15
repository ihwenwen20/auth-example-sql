const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class NotFound extends CustomAPIError {
	constructor(fieldName = 'Field') {
		super(`The value you entered for ${fieldName}, was not found`);
		this.statusCode = StatusCodes.NOT_FOUND;
	}
}
module.exports = NotFound;