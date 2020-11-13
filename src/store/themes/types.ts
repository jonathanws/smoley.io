// https://redux.js.org/recipes/usage-with-typescript#type-checking-actions--action-creators

export const THEME_DARK_CYAN = 'dark-cyan'
export const THEME_DARK_GREEN = 'dark-green'
export const THEME_DARK_ORANGE = 'dark-orange'

export const THEME_LIGHT_CYAN = 'light-cyan'
export const THEME_LIGHT_ORANGE = 'light-orange'
export const THEME_LIGHT_PURPLE = 'light-purple'

export type Theme = typeof THEME_DARK_CYAN | typeof THEME_DARK_GREEN | typeof THEME_DARK_ORANGE | typeof THEME_LIGHT_CYAN | typeof THEME_LIGHT_ORANGE | typeof THEME_LIGHT_PURPLE

export type ThemeState = {
	theme: Theme
}

export const SET_THEME = 'SET_THEME'

type SetTheme = {
	type: typeof SET_THEME,
	payload: Theme
}

export type ThemeActionTypes = SetTheme