import instanceAlredyScan from "./alredyScan";
import instanceBeginTravel from "./registerBeginTravel";
import instanceEndTravel from "./registerEndTravel";

import { DataTravelModel } from "../../models/dataTravel";

const alredyScan = instanceAlredyScan({ DataTravelModel })
const beginTravel = instanceBeginTravel({ DataTravelModel })
const endTravel = instanceEndTravel({ DataTravelModel })

export { alredyScan, beginTravel, endTravel}
