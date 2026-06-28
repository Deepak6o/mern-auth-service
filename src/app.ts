import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express';
import logger from './config/logger.js';
import type { HttpError } from 'http-errors';
// import createHttpError from 'http-errors';

const app = express();

app.get('/', (req, res) => {
    // const err = createHttpError(401, 'you can not access this route');
    // next(err);

    res.send('Hello, World!');
});

// global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        error: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
