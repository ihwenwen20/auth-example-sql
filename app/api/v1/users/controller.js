const User = require('./model');
const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError, DuplicateError } = require('../../../errors');

module.exports = {
	getAllUsers: async (req, res, next) => {
		console.log('token', req.user)
		try {
			const page = parseInt(req.query.page) || 1;
			const limit = parseInt(req.query.limit) || 10;
			const search = req.query.search || '';

			const { count, rows } = await User.findAndCountAll({
				where: {
					[Op.or]: [
						{ id: { [Op.like]: `%${search}%` } },
						{ username: { [Op.like]: `%${search}%` } },
						{ email: { [Op.like]: `%${search}%` } },
					],
				},
				offset: limit * (page - 1),
				limit: limit,
				order: [['id', 'DESC']],
			});

			const arrayUsers = rows.map(user => {
				const { password, ...userWithoutPassword } = user.get({ plain: true });
				delete userWithoutPassword.refreshToken;
				delete userWithoutPassword.resetPasswordExpires;
				delete userWithoutPassword.resetPasswordToken;
				return userWithoutPassword;
			});

			const totalPage = Math.ceil(count / limit);

			const result = {
				statusCode: StatusCodes.OK, message: 'Get List Users Succes.',
				data: arrayUsers,
				page,
				limit,
				totalRows: count,
				totalPage,
			};

			return res.status(StatusCodes.OK).json(result);
		} catch (error) {
			next(error);
		}
	},

	getUserById: async (req, res, next) => {
		try {
			const { id } = req.params;
			const user = await User.findOne({ where: { id } })
			if (!user || user === 0) throw new BadRequestError('Users Not Found');

			const userJSON = user.toJSON();
			delete userJSON.password;
			delete userJSON.refreshToken;
			delete userJSON.resetPasswordExpires;
			delete userJSON.resetPasswordToken;
			return res.status(StatusCodes.OK).json({ statusCode: StatusCodes.OK, message: 'Get Details Users Success.', data: userJSON });
		} catch (error) {
			next(error)
		}
	},

	createUser: async (req, res, next) => {
		try {
			const { username, email, password } = req.body;
			if (!username || !email || !password) throw new NotFoundError(username, email, password);

			const check = await User.findOne({ where: { username, email } });
			if (check) throw new DuplicateError(username, email);

			const users = await User.create({ ...req.body });

			const userJSON = users.toJSON();
			delete userJSON.password;
			delete userJSON.isAdmin;
			delete userJSON.refreshToken;
			delete userJSON.resetPasswordExpires;
			delete userJSON.resetPasswordToken;

			return res.status(StatusCodes.OK).json({ statusCode: StatusCodes.OK, message: 'Success!!! Users Created.', data: userJSON })
		} catch (error) {
			next(error)
		}
	},

	updateUser: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { username, email, password, confirmPassword } = req.body;

			if (!username || !email || !password || !confirmPassword) {
				throw new NotFoundError(username, email, password, confirmPassword);
			}

			if (password !== confirmPassword) {
				throw new BadRequestError('Password and Confirm Password do not match');
			}

			const check = await User.findOne({
				where: {
					[Op.and]: [
						{ username },
						{ email },
						{ id: { [Op.ne]: id } },
					],
				},
			});

			if (check) {
				throw new DuplicateError(username, email);
			}

			const [updatedUsers] = await User.update(
				{ ...req.body },
				{ where: { id: id } }
			);

			if (updatedUsers === 0) {
				throw new BadRequestError('Users Not Found');
			}

			const users = await User.findOne({
				where: { id: id },
			});

			const user = users.toJSON();
			delete user.password;
			delete user.isAdmin;
			delete user.refreshToken;
			delete user.resetPasswordExpires;
			delete user.resetPasswordToken;

			return res.status(StatusCodes.OK).json({ statusCode: StatusCodes.OK, message: 'Updated Data Users Successfully', data: user });
		} catch (error) {
			next(error);
		}
	},

	deleteUser: async (req, res, next) => {
		try {
			const { id } = req.params;
			if (id === req.user.userId) throw new BadRequestError('Warning!!! You cannot delete yourself.');

			const users = await User.destroy({ where: { id } });
			if (users === 0) {
				throw new BadRequestError('User Not Found or could not be deleted.');
			}
			return res.status(StatusCodes.OK).json({ statusCode: StatusCodes.OK, message: 'Success!!! Users removed.', data: {} })
		}
		catch (error) {
			next(error)
		}
	},

	changeStatusUser: async (req) => {
		console.log('token', req.user)
		const { id } = req.params;
		const secret = await User.findOne({
			where: {
				role: 'Developer'
			}
		});
		if (!secret) {
			throw new UnauthorizedError('Bro, Lu mau ngapain hah :D ketauan kan... wkwk');
		}

		const { status } = req.body;
		if (!['Active', 'Inactive', 'Pending', 'Suspend', 'Free'].includes(status)) {
			throw new BadRequestError(`Status must be one of: 'Active', 'Inactive', 'Pending', 'Suspend', or 'Free'`);
		}

		const [user, updatedUsers] = await User.update(
			{ status },
			{ where: { id } }
		);

		if (!user || user === 0) {
			throw new BadRequestError('No Users were updated.');
		}

		updatedUsers.forEach(updatedUser => {
			delete updatedUser.password;
			delete updatedUser.isAdmin;
			delete updatedUser.refreshToken;
			delete updatedUser.resetPasswordExpires;
			delete updatedUser.resetPasswordToken;
		});

		return { statusCode: StatusCodes.OK, message: `Success! Updated status for ${user} users.`, data: updatedUsers };
	}
}