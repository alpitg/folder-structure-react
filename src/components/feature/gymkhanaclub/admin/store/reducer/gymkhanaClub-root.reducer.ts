import { combineReducers } from "redux";
import facilityTypeReducer from "./facilityType.reducer";

const gymkhanaClubRootReducer = combineReducers({
  facilityType: facilityTypeReducer,
});


export default gymkhanaClubRootReducer;
