import './styles/global-styles.scss';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

function App() {
	const theme = 'red'
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
