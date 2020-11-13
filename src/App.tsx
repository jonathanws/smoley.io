import './styles/global-styles.scss';

import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import store from './store/store';

function App() {
	const [theme, setTheme] = useState(store.getState().theme.theme)

	store.subscribe(() => {
		const _theme = store.getState().theme.theme
		if (_theme !== theme) {
			setTheme(_theme)
		}
	})

	const classes = `app ${theme}`

	return (
		<div className={classes}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	)
}

export default App
