import { SET_THEME, THEME_DARK, ThemeActionTypes, ThemeState } from './types';

const initialState: ThemeState = {
	theme: THEME_DARK
}

export const themeReducer = (state = initialState, { payload, type }: ThemeActionTypes): ThemeState => {
	let _state = state

	switch (type) {
		case SET_THEME:
			_state = {
				theme: payload
			}
			break
		default:
			_state = state
	}

	return _state
}