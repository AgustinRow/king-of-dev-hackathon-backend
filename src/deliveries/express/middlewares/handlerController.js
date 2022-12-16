import {
  getRequestParameters,
  getResponseParameters,
} from '../../../logger/loggerFunctions';
import { logger } from '../../../logger/generalJsonLogger';
/*
 * It handles the controller
 * @param {Function} controller is the handler of the endpoint
 * @param {Object} args is the list of values the controller receive to execute
 * @returns http response
 */
const handlerController = (controller) => async (req, res) => {
  logger.info(getRequestParameters(req));
  const startTime = process.hrtime();
  try {
    const { response, status } = await controller(req);
    res.status(status).json(response);
    logger.info(
      getResponseParameters({
        response,
        startTime,
        status,
        accessTokenProvided: req.headers['authorization'],
      }),
    );
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: err.message });
  }
};

export default handlerController;
