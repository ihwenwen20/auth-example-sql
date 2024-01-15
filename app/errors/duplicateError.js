const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class DuplicateError extends CustomAPIError {
	constructor(fieldName = 'Field') {
		super(`Duplicated value entered for ${fieldName}, please choose another value`);
		this.statusCode = StatusCodes.BAD_REQUEST;
	}
}

module.exports = DuplicateError;
