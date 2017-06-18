import React from 'react';
import { Link } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
export { ThemeProvider } from 'styled-components';
export * from './Flex';
export * from './Header';
export * from './Header/SearchBar';
export * from './Main';
export * from './Sidebar';
export * from './Panel';
export * from 'react-router-dom';
export { default as asyncComponent } from './helper/asyncComponent';
export { default as theme } from './theme';
export { default as Layout } from './Layout';
export { default as Container } from './Container';
import * as md from 'react-icons/lib/md';
export const Button = styled.button`
	line-height: 36px;
	padding: 0 1em;
	display: flex;
	text-transform: uppercase;
	font-size: 16px;
	border-radius: 4px;
	background: transparent;
	border: 0;
	cursor: pointer;
	color: inherit;
`;
export const renderMenu = menu => (
	<ul>
		{menu.map((item, index) => (
			<li key={index} className>
				{item.name ? React.createElement(md[item.icon] || md.MdAdb) : null}
				{item.name
					? <Link to={item.url || '#'}>
							{item.name}
						</Link>
					: null}
				{item.heading ? <h4>{item.heading}</h4> : null}
				{item.children ? renderMenu(item.children) : null}
			</li>
		))}
	</ul>
);
export const Table = styled.table`
	width: 100%;
`;

export const init = props => injectGlobal`
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`;
init();
