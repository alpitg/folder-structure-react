import { combineReducers } from "redux";
import authenticateReducer from "./auth.reducer";

const rootReducer = combineReducers({
    authenticate: authenticateReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;