import './themeSwitcher.scss';

import { Space } from 'antd';
import React from 'react';

import store from './store/store';
import { SET_THEME, THEME_DARK_CYAN, THEME_DARK_GREEN, THEME_DARK_ORANGE, THEME_LIGHT_CYAN, THEME_LIGHT_ORANGE, THEME_LIGHT_PURPLE } from './store/themes/types';

const ThemeSwitcher = () => {
	const setLightCyan = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_LIGHT_CYAN,
		})
	const setLightOrange = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_LIGHT_ORANGE,
		})
	const setLightPurple = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_LIGHT_PURPLE,
		})

	const setDarkCyan = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_DARK_CYAN,
		})
	const setDarkGreen = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_DARK_GREEN,
		})
	const setDarkOrange = () =>
		store.dispatch({
			type: SET_THEME,
			payload: THEME_DARK_ORANGE,
		})

	return (
		<Space className="theme-switcher">
			<div className="circle dark-orange" onClick={setDarkOrange} />
			<div className="circle dark-green" onClick={setDarkGreen} />
			<div className="circle dark-cyan" onClick={setDarkCyan} />

			<div className="circle light-purple" onClick={setLightPurple} />
			<div className="circle light-orange" onClick={setLightOrange} />
			<div className="circle light-cyan" onClick={setLightCyan} />
		</Space>
	)
}

export default ThemeSwitcher
