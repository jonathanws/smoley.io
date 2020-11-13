// https://redux.js.org/recipes/usage-with-typescript#type-checking-actions--action-creators

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'

export type Theme = typeof THEME_LIGHT | typeof THEME_DARK

export type ThemeState = {
	theme: Theme
}

export const SET_THEME = 'SET_THEME'

type SetTheme = {
	type: typeof SET_THEME,
	payload: Theme
}

export type ThemeActionTypes = SetTheme