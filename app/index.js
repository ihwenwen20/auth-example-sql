const compression = require('compression')
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const os = require('os');
const dotenv = require('dotenv');
dotenv.config();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')
const db = require('./utils/db');

let app = global.app = express()
const PORT = process.env.PORT || 5000;

// # Router App
const authRoutes = require('./api/v1/auth/router');
const userRoutes = require('./api/v1/users/router');
const productRoutes = require('./api/v1/products/router');

// # middleware
const notFoundMiddleware = require('./middleware/not-found');
const handleErrorMiddleware = require('./middleware/handler-error');

// # Session
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({ db: db });

let corsOptions = {
	// origin: '*', // atau 'http://localhost:3000',
	origin: 'http://localhost:3000',
	// methods: ['GET, HEAD, PUT, PATCH, POST, DELETE'], // optional
	credentials: true, // optional
};

const limiter = RateLimit({
	windowMs: 15 * 60 * 1000, // 15 menit
	max: 100, // Maksimal 100 request dalam 15 menit
});

app.use(compression())
app.use((req, res, next) => {
	const startTime = Date.now();
	res.on('finish', () => {
		const endTime = Date.now();
		const responseTime = endTime - startTime;
		console.log(`ResponseTime: ${responseTime}ms`);
	});
	next();
});
app.use(session({
	secret: process.env.JWT_SECRET_KEY,
	resave: false,
	saveUninitialized: true,
	store: store,
	cookie: {
		secure: 'auto'
	}
}));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(helmet());
app.use(limiter);
app.use(express.urlencoded({ extended: true }));

// use router
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Server up and running...' });
});
app.use('/api', authRoutes);
app.use(userRoutes);
app.use(productRoutes);

// use middleware
app.use(handleErrorMiddleware);
app.use(notFoundMiddleware);

app.listen(PORT, () => {
	console.log(`🖥️ \x1b[33m${os.type()}\x1b[0m, \x1b[33m${os.release()}\x1b[0m - \x1b[33m${os.arch()}\x1b[0m`);
	const ramInGB = os.totalmem() / (1024 * 1024 * 1024);
	console.log(`💾 \x1b[33mTotal RAM: ${ramInGB.toFixed(2)} GB\x1b[0m`);
	const freeRamInGB = os.freemem() / (1024 * 1024 * 1024);
	console.log(`💽 \x1b[33mFree RAM: ${freeRamInGB.toFixed(2)} GB\x1b[0m`);
	console.log('\x1b[33m%s\x1b[0m', `📃 Made by 1112Project`);
	console.log(`Server up and running 🚀 on: ${PORT}`);
});