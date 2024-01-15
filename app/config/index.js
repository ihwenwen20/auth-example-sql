const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	jwtExpiration: process.env.JWT_EXPIRATE_TOKEN,
	jwtRefreshTokenExpiration: process.env.JWT_EXPIRATE_REFRESH_TOKEN,
	secretKey: process.env.JWT_SECRET_KEY,
	appName: `${process.env.APP_NAME}`,
	URLAPP: `${process.env.HOST}:${process.env.PORT}`,
	host: `${process.env.HOST} || http://localhost`,
	port: `${process.env.PORT}`,
	dbDialect: `${process.env.DB_DIALECT}`, /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
	dbHost: `${process.env.DB_HOST}`,
	dbPort: `${process.env.DB_PORT}`,
	dbName: `${process.env.DB_NAME}`,
	dbUser: `${process.env.DB_USER}`,
	dbPassword: `${process.env.DB_PASSWORD}`,
	brevo_key: `${process.env.BREVO_KEY}`,
	brevo_name: `${process.env.BREVO_NAME}`,
	brevo_email: `${process.env.BREVO_EMAIL}`,
};
