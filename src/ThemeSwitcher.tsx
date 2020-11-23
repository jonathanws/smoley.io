import './themeSwitcher.scss';

import { Popover, Space } from 'antd';
import React from 'react';

import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import store from './store/store';
import { SET_THEME, THEME_DARK_CYAN, THEME_DARK_GREEN, THEME_DARK_ORANGE, THEME_LIGHT_CYAN, THEME_LIGHT_ORANGE, THEME_LIGHT_PURPLE } from './store/themes/types';

const ThemeSwitcher = () => {
	const setTheme = (payload: string) => store.dispatch({ type: SET_THEME, payload })

	const setDarkCyan = () => setTheme(THEME_DARK_CYAN)
	const setDarkGreen = () => setTheme(THEME_DARK_GREEN)
	const setDarkOrange = () => setTheme(THEME_DARK_ORANGE)
	const setLightCyan = () => setTheme(THEME_LIGHT_CYAN)
	const setLightOrange = () => setTheme(THEME_LIGHT_ORANGE)
	const setLightPurple = () => setTheme(THEME_LIGHT_PURPLE)

	const popoverInner = (
		<Space>
			<div className="circle dark-orange" onClick={setDarkOrange} />
			<div className="circle dark-green" onClick={setDarkGreen} />
			<div className="circle dark-cyan" onClick={setDarkCyan} />

			<div className="circle light-purple" onClick={setLightPurple} />
			<div className="circle light-orange" onClick={setLightOrange} />
			<div className="circle light-cyan" onClick={setLightCyan} />
		</Space>
	)

	return (
		<Popover overlayClassName="theme-switcher" placement="bottomRight" title="Theme" content={popoverInner} trigger="click">
			<div className="hover-button">
				<FontAwesomeIcon size="2x" icon={faPalette} />
			</div>
		</Popover>
	)
}

export default ThemeSwitcher
