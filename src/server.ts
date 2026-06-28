import { Config } from './config/index.js';
import app from './app.js';
import logger from './config/logger.js';
const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startServer();
