import React from 'react';
import { Route, asyncComponent } from '../../../src';

const AdminMain = props => (
	<div>
		<Route
			exact
			path="/admin"
			component={asyncComponent(() => import('./Dashboard'))}
		/>
		<Route
			exact
			path="/admin/updates"
			component={asyncComponent(() => import('./Updates'))}
		/>
		<Route
			exact
			path="/admin/posts"
			component={asyncComponent(() => import('./Posts'))}
		/>
	</div>
);

export default AdminMain;
