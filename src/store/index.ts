import { combineReducers } from 'redux';

import { themeReducer } from './themes/reducers';

const rootReducer = combineReducers({
	theme: themeReducer
})
export default rootReducer

export type RootState = ReturnType<typeof rootReducer>