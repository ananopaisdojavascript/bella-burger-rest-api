import app, { logger } from './app';

const port = 3000;

app.listen(port, () => {
    try {
        logger.info(`Server is running on port ${port}`);
    } catch (error) {
        logger.error(error)
    }
});