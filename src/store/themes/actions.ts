import { SET_THEME, Theme, ThemeActionTypes } from './types';

export const setTheme = (theme: Theme): ThemeActionTypes => ({
	type: SET_THEME,
	payload: theme
})