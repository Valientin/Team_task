import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import Items from '../containers/items';

const Routes = () => {
	return(
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/items" component={Items} />
		</Switch>
	)
}

export default Routes;