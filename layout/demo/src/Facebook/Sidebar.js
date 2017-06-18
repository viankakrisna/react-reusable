import React from 'react';
import { Sidebar } from '../../../src/Sidebar';
import menu from '../menu';
import * as md from 'react-icons/lib/md';
import { Link } from 'react-router-dom';

const renderMenu = menu => (
	<ul>
		{menu.map((item, index) => (
			<li key={index}>
				{item.name ? React.createElement(md[item.icon] || md.MdAdb) : null}
				{item.name ? <Link to={item.url || '#'}>{item.name}</Link> : null}
				{item.heading ? <h4>{item.heading}</h4> : null}
				{item.children ? renderMenu(item.children) : null}
			</li>
		))}
	</ul>
);

const AdminSidebar = props => (
	<Sidebar flat>
		{renderMenu(props.menu)}
	</Sidebar>
);

AdminSidebar.defaultProps = {
	menu,
};

export default AdminSidebar;
