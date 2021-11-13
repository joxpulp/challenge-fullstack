import express, { Request, Response } from 'express';
import { mongoose } from './mongoose';
import { CONFIG } from '../config/config';
import { specs } from '../config/swagger';
import fileupload from 'express-fileupload';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import sslRedirect from 'heroku-ssl-redirect';
import passport from '../middlewares/auth';
import apiRouter from '../routes/index';
import swaggerUi from 'swagger-ui-express';

const app = express();
mongoose();

app.use(express.static(path.resolve('public')));
app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// File upload middleware with temp dir
app.use(
	fileupload({
		useTempFiles: true,
		tempFileDir: '/tmp/',
	})
);
app.use(sslRedirect());
app.use(cookieParser());
app.use(
	cors({
		origin: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);
app.use(
	session({
		store: connectMongo.create({ mongoUrl: CONFIG.MONGO_URL }),
		secret: CONFIG.SECRET,
		cookie: { sameSite: true, secure: 'auto', maxAge: 1000 * 120 },
		saveUninitialized: false,
		resave: true,
		rolling: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

// API DOCS
app.use(
	'/docs',
	swaggerUi.serve,
	swaggerUi.setup(specs, { customSiteTitle: 'Edrans Ecommerce Challenge Docs' })
);
// Routes and serve static files
app.use('/api', apiRouter);
app.get('/*', (req: Request, res: Response) => {
	const indexHtml = path.resolve('public/index.html');
	res.sendFile(indexHtml);
});

export default app;
