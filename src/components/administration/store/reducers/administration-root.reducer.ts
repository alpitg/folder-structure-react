import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import roleReducer from "./role.reducer";

const administrationRootReducer = combineReducers({
  users: userReducer,
  roles: roleReducer,
});

export type AppState = ReturnType<typeof administrationRootReducer>;
export default administrationRootReducer;
