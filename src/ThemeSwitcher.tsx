import './themeSwitcher.scss';

import { Space } from 'antd';
import React from 'react';

import store from './store/store';
import { SET_THEME, THEME_DARK, THEME_LIGHT } from './store/themes/types';

const ThemeSwitcher = () => {
	const setLight = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_LIGHT,
		})
	const setDark = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_DARK,
		})

	return (
		<Space className="theme-switcher">
			<div className="circle dark-colors" onClick={setDark} />
			<div className="circle light-colors" onClick={setLight} />
		</Space>
	)
}

export default ThemeSwitcher
