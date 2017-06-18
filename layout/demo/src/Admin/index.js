import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { Layout, theme, ThemeProvider } from '../../../src';

const Admin = props => (
	<ThemeProvider theme={theme()}>
		<Layout>
			<Header />
			<Sidebar />
			<Main />
		</Layout>
	</ThemeProvider>
);

export default Admin;
