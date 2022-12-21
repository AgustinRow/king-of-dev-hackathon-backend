import { port, host } from 'config';
import { build, startServices } from './deliveries/express/server';
import { services } from './services';
import { logger } from './logger/generalJsonLogger';

const app = build();

/**
 * Starts the server with the given db instance
 *
 * @param  {db} database instance
 */

async function start({ db }) {
  app.listen(port, '0.0.0.0', async () => {
    await startServices({ db });
    logger.info('Server started on port ' + port);
    logger.info(`Express server running on ${host}${port}`);
  });
}

start(services());
