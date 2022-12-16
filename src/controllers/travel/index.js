import { getTravels } from '../../usecases/travel';
import getTravelsController from './getTravel';

const getTravelsControllerInstance = getTravelsController({
  dependencies: getTravels,
});

export { getTravelsControllerInstance };
