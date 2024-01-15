const { Sequelize } = require('sequelize')
const { dbDialect, dbHost, dbPort, dbName, dbUser, dbPassword } = require('../../config');

const db = new Sequelize(dbName, dbUser, dbPassword, {
	host: dbHost,
	port: dbPort, // optional jika port sql selain 3306
	dialect: dbDialect,
});

const connectToDatabase = async () => {
	try {
		await db.authenticate();
		console.log("Database Connected Succesfully...");
		await db.sync();
		console.log("All models were synchronized successfully.");
	} catch (err) {
		console.error("Database Connection error", err.message);
		db.close()
		process.exit();
	}
};

connectToDatabase();

module.exports = db;