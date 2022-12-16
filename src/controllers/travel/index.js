import beginTravelController from "./beginTravelController";
import endTravelController from "./endTravelController";
import { alredyScan, beginTravel, endTravel } from '../../usecases/travel';

const beginTravelControllerInstance = beginTravelController({
    dependencies: {alredyScan, beginTravel}
})

const endTravelControllerInstance = endTravelController({
    dependencies: {alredyScan, endTravel}
})


export { beginTravelControllerInstance, endTravelControllerInstance }