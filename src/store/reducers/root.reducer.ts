import { combineReducers } from "redux";
import authenticateReducer from "./auth.reducer";
import administrationRootReducer from "../../components/administration/store/reducers/administration-root.reducer";

const rootReducer = combineReducers({
  authenticate: authenticateReducer,
  administration: administrationRootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
