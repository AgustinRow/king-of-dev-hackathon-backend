import instanceGetTravels from './getTravels';
import { TravelModel } from '../../models/travel';
import instanceAlredyScan from './alredyScan';
import instanceBeginTravel from './registerBeginTravel';
import instanceEndTravel from './registerEndTravel';

import { DataTravelModel } from '../../models/dataTravel';

const getTravels = instanceGetTravels({ TravelModel });

const alredyScan = instanceAlredyScan({ DataTravelModel });
const beginTravel = instanceBeginTravel({ DataTravelModel });
const endTravel = instanceEndTravel({ DataTravelModel });

export { alredyScan, beginTravel, endTravel, getTravels };
