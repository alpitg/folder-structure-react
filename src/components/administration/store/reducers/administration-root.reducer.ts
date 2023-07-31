import { combineReducers } from "redux";
import usersReducer from "./users.reducer";

const administrationRootReducer = combineReducers({
  users: usersReducer,
});

export type AppState = ReturnType<typeof administrationRootReducer>;
export default administrationRootReducer;
