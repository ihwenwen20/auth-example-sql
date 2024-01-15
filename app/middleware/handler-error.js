const { StatusCodes } = require('http-status-codes');
const DuplicateError = require('../errors/duplicateError');

const errorHandlerMiddleware = (err, req, res, next) => {
	// console.log('err from middleware', err);
	console.log('err.message from middleware', err.message);

	let customError = {
		// set default
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		message: err.message || 'Something went wrong try again later',
	};

	// error validation dari mongoose
	// if ini untuk error yang masuk ke catch
	if (err.name === 'ValidationError') {
		customError.message = Object.values(err.errors)
			.map((item) => item.message)
			.join(', ');
		customError.statusCode = 400;
	}

	if (err.code && err.code === 11000) {
		customError.message = `Duplicated value entered for ${Object.keys(
			err.keyValue
		)} field, please choose another value`;
		customError.statusCode = 400;
	}

	if (err.name === 'CastError') {
		customError.message = `Value item with id : ${err.value}, Not found`;
		customError.statusCode = 404;
	}

	if (err.name === 'TokenExpiredError' || err.message === 'jwt expired') {
		customError.message = 'AccessToken has expired. Please, login again...';
		customError.statusCode = StatusCodes.UNAUTHORIZED;
	}

	if (err instanceof DuplicateError) {
		customError.message = err.message;
		customError.statusCode = err.statusCode;
	}

	return res.status(customError.statusCode).json(customError);
};

module.exports = errorHandlerMiddleware;