import { SET_THEME, THEME_DARK_ORANGE, ThemeActionTypes, ThemeState } from './types';

const initialState: ThemeState = {
	theme: THEME_DARK_ORANGE
}

const setTheme = (state: ThemeState, { payload }: ThemeActionTypes): ThemeState => ({
	...state,
	theme: payload
})

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
	switch (action.type) {
		case SET_THEME:
			return setTheme(state, action)
		default:
			return state
	}
}