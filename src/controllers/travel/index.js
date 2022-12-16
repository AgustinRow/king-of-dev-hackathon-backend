import getTravelsController from './getTravel';
import beginTravelController from './beginTravelController';
import endTravelController from './endTravelController';
import {
  alredyScan,
  beginTravel,
  endTravel,
  getTravels,
} from '../../usecases/travel';

const beginTravelControllerInstance = beginTravelController({
  dependencies: { alredyScan, beginTravel },
});

const endTravelControllerInstance = endTravelController({
  dependencies: { alredyScan, endTravel },
});

const getTravelsControllerInstance = getTravelsController({
  dependencies: getTravels,
});

export {
  beginTravelControllerInstance,
  endTravelControllerInstance,
  getTravelsControllerInstance,
};
