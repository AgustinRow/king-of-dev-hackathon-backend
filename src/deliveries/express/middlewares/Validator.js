import Validators from './validators';
import { logger } from './../../../logger/generalJsonLogger';

/* This works as a factory function, that way we can call a valid validator as a middleware in the routes, for example:
If we have a route defined this way:
    router.put('/:id', putDreamController);
and we wish to add a validator to checsk that things in the body/params/etc are correct would be as simple as
    router.put('/:id', Validator('dreamPut'), putDreamController);
Where "Validator('dreamPut')" is calling the function below asuming a validator called 'dreamPut' exist within the import
at the top of the file. In case the imported validator does not exist it throws an error. */

export default (validator) => {
  if (!Object.prototype.hasOwnProperty.call(Validators, validator))
    throw new Error(`'${validator}' validator does not exist`);
  return async function (req, res, next) {
    try {
      const validated = await Validators[validator].validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      logger.error(err);
      if (err.isJoi) return res.status(400).json({ message: err.message });
      res.status(500).json({ message: 'Internal Server error' });
    }
  };
};
