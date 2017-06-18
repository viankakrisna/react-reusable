import { render } from 'react-dom';
import React from 'react';
import { asyncComponent, BrowserRouter as Router, Route } from '../../src';

const AppRouter = () => (
	<Router>
		<div>
			<Route
				path="/facebook"
				component={asyncComponent(() => import('./Facebook'))}
			/>
			<Route
				path="/admin"
				component={asyncComponent(() => import('./Admin'))}
			/>
			<Route
				path="/twitter"
				component={asyncComponent(() => import('./Twitter'))}
			/>
		</div>
	</Router>
);
render(<AppRouter />, document.querySelector('#demo'));
