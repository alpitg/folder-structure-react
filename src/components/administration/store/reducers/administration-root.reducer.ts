import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import roleReducer from "./role.reducer";
import tenantReducer from "./tenant.reducer";

const administrationRootReducer = combineReducers({
  users: userReducer,
  roles: roleReducer,
  tenants: tenantReducer,
});

export type AppState = ReturnType<typeof administrationRootReducer>;
export default administrationRootReducer;
