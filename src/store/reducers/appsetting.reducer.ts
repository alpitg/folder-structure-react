import { DARK, LIGHT, THEME } from "../../constants/global-contants/global-key.const";
import { AppsettingActions, UPDATE_THEME } from "../actions/appsetting.action";

const initialState = {
  theme: "light"
};

const appsettingReducer = (state = initialState, action: AppsettingActions) => {
  switch (action.type) {
    case UPDATE_THEME:
      {
        let theme = localStorage.getItem(THEME);
        if (theme === LIGHT) {
          theme = DARK;
        } else {
          theme = LIGHT;
        }
        localStorage.setItem(THEME, theme);

        return {
          ...state,
          theme: theme,
        } as typeof initialState;
      }
    default:
      return { ...state, theme: localStorage.getItem(THEME) } as typeof initialState;
  }
};

export default appsettingReducer;
