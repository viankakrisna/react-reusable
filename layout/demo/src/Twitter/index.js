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
			font: {
				size: {
					base: '14px',
				},
			},
			height: {
				header: '46px',
				headerInner: '32px',
			},
			width: {
				sidebar: '184px',
				container: '1190px',
			},
			backgroundColor: {
				header: 'white',
				headerSearchBar: '#f5f8fa',
				primary: '#3b5998',
			},
			color: {
				headerSearchBar: 'black',
				header: 'black',
				primary: 'white',
			},
			border: {
				panel: '1px solid',
			},
			borderColor: {
				panel: '#e5e6e9 #dfe0e4 #d0d1d5',
			},
			borderRadius: {
				searchbarWrapper: '16px',
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
