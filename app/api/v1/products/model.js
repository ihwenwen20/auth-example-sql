const { DataTypes } = require('sequelize');
const db = require('../../../utils/db')
const { generateObjectId } = require('../../../utils/function')
const User = require('../users/model')

const Products = db.define('products', {
	id: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true,
		defaultValue: generateObjectId,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			len: [3, 100]
		}
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	userId: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	}
}, {
	freezeTableName: true
});

User.hasMany(Products);
Products.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Products;