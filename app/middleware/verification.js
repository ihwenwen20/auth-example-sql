const { UnauthenticatedError, UnauthorizedError } = require('../errors');
const dotenv = require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
	isAdmin: (req, res, next) => {
		if (req.user && req.user.isAdmin) {
			next();
		} else {
			throw new UnauthorizedError('Unauthorized to Access This Route');
		}
	},

	authenticate: (req, res, next) => {
		let token;
		const accessToken = req.header('Authorization');
		// console.log('accessToken',req.header('Authorization'));

		if (accessToken && accessToken.startsWith('Bearer')) {
			token = accessToken.split(' ')[1];
		}

		if (!token) {
			throw new UnauthenticatedError('Invalid Authentication');
		}

		// const token = accessToken.split(' ')[1];

		try {
			const decoded = jwt.verify(token, secretKey);
			req.user = decoded;
			next();
		} catch (error) {
			throw new UnauthenticatedError('Invalid Authentication');
		}
	},

	verifyToken: (req, res, next) => {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];
		if (token == null) return res.sendStatus(401);
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
			if (err) return res.sendStatus(403);
			req.email = decoded.email;
			next();
		})
	}
}

