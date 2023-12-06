import { combineReducers } from "redux";
import facilityTypeReducer from "./facilityType.reducer";
import facilityReducer from "./facility.reducer";
import facilityCourtReducer from "./facility-court.reducer";

const gymkhanaClubRootReducer = combineReducers({
  facilitiesType: facilityTypeReducer,
  facility: facilityReducer,
  facilityCourts: facilityCourtReducer,
});


export default gymkhanaClubRootReducer;
