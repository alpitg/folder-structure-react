import { combineReducers } from "redux";
import authenticateReducer from "./auth.reducer";
import usersReducer from "./users.reducer";

const rootReducer = combineReducers({
  authenticate: authenticateReducer,
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
