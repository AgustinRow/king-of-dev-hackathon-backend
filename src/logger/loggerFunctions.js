/* This function let us get the parameters required at the time of logging info about endpoints, has to be imported
and called everytime we wish to log, example:

import getRequestParameters from '../utils/loggerFunctions'
...
somerequest(req, res){
  ...
  logger.info('Accessed dummy request', getRequestParameters(req));
  ...
}
*/
function getRequestParameters(req) {
  const {
    body = {},
    query = {},
    params = {},
    baseUrl,
    path,
    method,
    headers,
  } = req;
  return {
    method,
    route: baseUrl + path,
    ...body,
    ...query,
    ...params,
    accessTokenProvided: headers['authorization'],
  };
}

function getResponseParameters({
  response,
  startTime,
  status,
  accessTokenProvided,
}) {
  const [secs, nanos] = process.hrtime(startTime);
  const duration = secs * 1000 + nanos / 1000000 + ' ms';
  return {
    status,
    response,
    duration,
    accessTokenProvided,
  };
}

export { getRequestParameters, getResponseParameters };
