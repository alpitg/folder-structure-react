import { combineReducers } from "redux";
import facilityTypeReducer from "./facilityType.reducer";
import facilityReducer from "./facility.reducer";

const gymkhanaClubRootReducer = combineReducers({
  facilityType: facilityTypeReducer,
  facilities: facilityReducer,
});


export default gymkhanaClubRootReducer;
