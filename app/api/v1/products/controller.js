const { Op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError, DuplicateError } = require('../../../errors');
const Products = require('./model');

module.exports = {
	getAllProducts: async (req, res, next) => {
		try {
			const page = parseInt(req.query.page) || 1;
			const limit = parseInt(req.query.limit) || 10;
			const search = req.query.search || '';

			const { count, rows } = await Products.findAndCountAll({
				where: {
					[Op.or]: [
						{ id: { [Op.like]: `%${search}%` } },
						{ name: { [Op.like]: `%${search}%` } },
						{ price: { [Op.like]: `%${search}%` } },
					],
				},
				offset: limit * (page - 1),
				limit: limit,
				order: [['id', 'DESC']],
			});

			const products = rows.map(product => product.toJSON());

			const totalPage = Math.ceil(count / limit);

			const result = {
				statusCode: StatusCodes.OK, message: 'Get List Products Success.',
				data: products,
				page: parseInt(page),
				limit: parseInt(limit),
				totalRows: count,
				totalPage,
			};

			return res.status(StatusCodes.OK).json(result);
		} catch (error) {
			next(error);
		}
	},

	getAllProductsInfinite: async (req, res, next) => {
		try {
			const last_id = parseInt(req.query.lastId) || 0;
			const page = parseInt(req.query.page) || 1;
			const limit = parseInt(req.query.limit) || 10;
			const search = req.query.search || '';

			const whereClause = {
				[Op.or]: [
					{ id: { [Op.like]: `%${search}%` } },
					{ name: { [Op.like]: `%${search}%` } },
					{ price: { [Op.like]: `%${search}%` } },
				],
			};

			// Jika last_id ada, tambahkan kondisi where untuk memuat produk lebih lanjut
			if (last_id > 0) {
				whereClause.id = { [Op.lt]: last_id };
			}

			const { count, rows } = await Products.findAndCountAll({
				where: whereClause,
				offset: limit * (page - 1),
				limit: limit,
				order: [['id', 'DESC']],
			});

			const products = rows.map(product => product.toJSON());

			const totalPage = Math.ceil(count / limit);

			const result = {
				statusCode: StatusCodes.OK,
				message: 'Get List Products Success.',
				data: products,
				lastId: products.length ? products[products.length - 1].id : 0,
				hasMore: count > page * limit,
				page: parseInt(page),
				limit: parseInt(limit),
				totalRows: count,
				totalPage,
			};

			return res.status(StatusCodes.OK).json(result);
		} catch (error) {
			next(error);
		}
	},

	getProductById: async (req, res, next) => {
		try {
			const { id } = req.params;
			const product = await Products.findOne({ where: { id } });

			if (!product) {
				throw new NotFoundError(`Product with ID ${id} not found.`);
			}

			return res.status(StatusCodes.OK).json({ statusCode: StatusCodes.OK, message: 'Get Details Product Success.', data: product });
		} catch (error) {
			next(error);
		}
	},

	createProduct: async (req, res, next) => {
		try {
			const { name, price } = req.body;

			const check = await Products.findOne({ where: { name, price } });
			if (check) throw new DuplicateError(name, price);

			const product = await Products.create({ name, price, userId: req.user.userId });

			return res.status(StatusCodes.CREATED).json({ statusCode: StatusCodes.CREATED, message: 'Product created successfully.', data: product });
		} catch (error) {
			next(error);
		}
	},

	updateProduct: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { name, price } = req.body;

			if (!name || !price) {
				throw new NotFoundError(name, price);
			}

			const check = await Products.findOne({
				where: {
					[Op.and]: [
						{ name },
						{ price },
						{ userId: req.user.userId },
						{ id: { [Op.ne]: id } },
					],
				},
			});

			if (check) {
				throw new DuplicateError(name, price);
			}

			const [updatedProduct] = await Products.update(
				{ name, price, userId: req.user.userId },
				{ where: { id } }
			);

			if (!updatedProduct || updatedProduct === 0) {
				throw new BadRequestError(`Product with ID ${id} not found.`);
			}

			const products = await Products.findOne({
				where: { id },
			});

			const product = products.toJSON();

			return res.status(StatusCodes.OK).json({ statusCode: StatusCodes.OK, message: 'Product updated successfully.', data: product });
		} catch (error) {
			next(error);
		}
	},

	deleteProduct: async (req, res, next) => {
		try {
			const { id } = req.params;
			const rowsDeleted = await Products.destroy({ where: { id } });

			if (rowsDeleted === 0) {
				throw new BadRequestError(`Product with ID ${id} not found.`);
			}

			return res.status(StatusCodes.OK).json({ statusCode: StatusCodes.OK, message: 'Product deleted successfully.', data: {} });
		} catch (error) {
			next(error);
		}
	},

	deleteMultipleProducts: async (req, res, next) => {
		try {
			const { ids } = req.body;

			if (!ids || !Array.isArray(ids) || ids.length === 0) {
				throw new BadRequestError('Invalid or empty product IDs.');
			}

			const whereClause = {
				id: {
					[Op.in]: ids,
				},
				userId: req.user.userId,
			};

			const existingProducts = await Products.findAll({
				attributes: ['id'],
				where: whereClause,
			});

			const existingIds = existingProducts.map(product => product.id);
			const nonExistingIds = ids.filter(id => !existingIds.includes(id));

			if (nonExistingIds.length > 0) {
				throw new BadRequestError(`No products found with the provided IDs or unauthorized to delete. Non-existing IDs: ${nonExistingIds.join(', ')}`);
			}

			const rowsDeleted = await Products.destroy({
				where: whereClause,
			});

			if (rowsDeleted === 0) {
				throw new BadRequestError('No products found with the provided IDs or unauthorized to delete.');
			}

			return res.status(StatusCodes.OK).json({
				statusCode: StatusCodes.OK,
				message: 'Products deleted successfully.',
				data: {},
			});
		} catch (error) {
			next(error);
		}
	},
};