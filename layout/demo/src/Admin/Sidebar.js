import React from 'react';
import { Sidebar, renderMenu } from '../../../src';
import menu from '../menu';

const AdminSidebar = props => (
	<Sidebar>
		{renderMenu(props.menu)}
	</Sidebar>
);

AdminSidebar.defaultProps = {
	menu,
};

export default AdminSidebar;
