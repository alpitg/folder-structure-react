import { combineReducers } from "redux";
import facilityTypeReducer from "./facilityType.reducer";
import facilityReducer from "./facility.reducer";
import facilityCourtReducer from "./facility-court.reducer";
import bookSlotsreducer from "./booking-slot.reducer";

const gymkhanaClubRootReducer = combineReducers({
  facilitiesType: facilityTypeReducer,
  facility: facilityReducer,
  facilityCourts: facilityCourtReducer,
  shedular: bookSlotsreducer,
});


export default gymkhanaClubRootReducer;
