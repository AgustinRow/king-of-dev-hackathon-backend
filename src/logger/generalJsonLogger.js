import * as winston from 'winston';
import { logLevel } from 'config';
const { createLogger, format, transports } = winston;
const { timestamp, combine, json } = format;

const loggerJsonFormat = format((error) => {
  const {
    timestamp,
    level,
    route,
    method,
    message,
    payload,
    errors,
    headers,
    body,
    query,
    params,
    response,
    responseTime,
    ...metadata
  } = error;
  return {
    timestamp,
    level,
    message,
    route,
    method,
    payload,
    errors,
    headers,
    body,
    query,
    params,
    response,
    responseTime,
    ...metadata,
  };
})();

const logger = createLogger({
  format: combine(
    timestamp(),
    loggerJsonFormat,
    json({ deterministic: false }),
  ),
  transports: [
    new transports.Console({
      level: logLevel,
    }),
  ],
});

export { logger };
