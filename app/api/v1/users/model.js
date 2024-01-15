const { DataTypes } = require('sequelize');
const argon2 = require('argon2');
const db = require('../../../utils/db')
const { generateObjectId } = require('../../../utils/function')

const User = db.define('users', {
	// id: {
	// 	type: DataTypes.UUID,
	// 	defaultValue: DataTypes.UUIDV4,
	// 	allowNull: false,
	// 	primaryKey: true,
	// },
	id: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		defaultValue: generateObjectId,
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: {
			args: true,
			msg: 'UserName Already Exist',
		},
		validate: {
			len: {
				args: [2],
				msg: 'Username must be at least 2 characters in length',
			},
		},
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: {
			args: true,
			msg: 'Email Already Exist',
		},
		validate: {
			isEmail: {
				args: true,
				msg: 'Invalid email format!',
			},
		},
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: {
				args: [6],
				msg: 'Password must be at least 6 characters in length',
			},
		},
	},
	refreshToken: DataTypes.TEXT,
	isAdmin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
	resetPasswordToken: DataTypes.STRING,
	resetPasswordExpires: DataTypes.DATE,
}, {
	freezeTableName: true, // Tabel akan memiliki nama yang sesuai dengan nama model tanpa menambahkan "s"
	hooks: {
		beforeSave: async (user) => {
			if (user.changed('password')) {
				try {
					const hashedPassword = await argon2.hash(user.password);
					user.password = hashedPassword;
				} catch (error) {
					throw new Error('Failed to encrypt password');
				}
			}
		},

		beforeCreate: async (user) => {
			if (!user.id) {
				user.id = generateObjectId();
			}
		},
	},
});

User.prototype.comparePassword = async function (candidatePassword) {
	try {
		const isMatch = await argon2.verify(this.password, candidatePassword);
		return isMatch;
	} catch (error) {
		throw new Error('Failed to compare password');
	}
};

module.exports = User;