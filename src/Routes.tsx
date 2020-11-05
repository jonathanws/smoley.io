import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Paths from './enums/Paths';
import HomePage from './pages/HomePage';

const Routes = () => (
	<Switch>
		<Route exact path={Paths.HOME}>
			<HomePage />
		</Route>
	</Switch>
)

export default Routes
