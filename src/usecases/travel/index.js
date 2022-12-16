import instanceGetTravels from './getTravels';
import { TravelModel } from '../../models/travel';

const getTravels = instanceGetTravels({ TravelModel });

export { getTravels };
