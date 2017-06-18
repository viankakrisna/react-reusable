import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { Layout, theme } from '../../../src';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash/merge';

const Admin = props => (
	<ThemeProvider
		theme={merge(theme(), {
			height: {
				header: '43px',
				headerInner: '24px',
			},
			font: {
				size: {
					base: '14px',
				},
			},
			width: {
				sidebar: '184px',
			},
			color: {
				...theme.color,
				headerSearchBar: 'black',
				primary: 'white',
			},
			backgroundColor: {
				headerSearchBar: 'white',
				header: '#3b5998',
			},
			border: {
				panel: '1px solid',
			},
			borderColor: {
				panel: '#e5e6e9 #dfe0e4 #d0d1d5',
			},
		})}
	>
		<Layout contained>
			<Header />
			<Sidebar />
			<Main />
		</Layout>
	</ThemeProvider>
);

export default Admin;
