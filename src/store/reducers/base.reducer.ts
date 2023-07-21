import { combineReducers } from "redux";
import authenticateReducer from "./auth.reducer";

const baseReducer = combineReducers({
    authenticate: authenticateReducer
});

export type AppState = ReturnType<typeof baseReducer>;
export default baseReducer;