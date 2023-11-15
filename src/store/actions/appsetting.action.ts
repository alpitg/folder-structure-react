/**
 * @Rulebook
 * Group Type, interface & function in following sequence
 * 1. Action Types
 * 2. Action interfaces
 * 3. Action functions
 * 4. Type of actions variable
 */


export const UPDATE_THEME = "UPDATE_THEME";

//#region - Action interfaces
export interface IThemeUpdate {
  type: typeof UPDATE_THEME;
}
//#endregion

//#region - Action functions
export const themeUpdate = (): IThemeUpdate => ({
  type: UPDATE_THEME,
});

//#endregion

export type AppsettingActions =
  | IThemeUpdate;
