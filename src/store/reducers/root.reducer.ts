import { combineReducers } from "redux";
import authenticateReducer from "./auth.reducer";
import administrationRootReducer from "../../components/administration/store/reducers/administration-root.reducer";
import pagesReducer from "./pages.reducer";
import actionsReducer from "./actions.reducer";
import { LOGOUT_USER_REQUEST } from "../actions/auth.action";
import appsettingReducer from "./appsetting.reducer";

const allReducers = combineReducers({
  authenticate: authenticateReducer,
  administration: administrationRootReducer,
  pages: pagesReducer,
  actions: actionsReducer,
  appsetting: appsettingReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === LOGOUT_USER_REQUEST) {
    state = undefined;
  }
  return allReducers(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
