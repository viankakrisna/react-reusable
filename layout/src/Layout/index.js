import React from 'react';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	padding-top: ${props => props.theme.height.header};
	display: flex;
	flex-wrap: wrap;
	align-item: flex-start;
	background: #eee;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	max-width: ${props => (props.contained ? props.theme.width.container : '100%')};
	font-size: ${props => props.theme.baseFontSize}
`;

export const LayoutContainer = styled.div`
	padding-top: ${props => props.theme.height.header};
	display: flex;
	flex-wrap: wrap;
	align-item: flex-start;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	max-width: ${props => (props.contained ? props.theme.width.container : '100%')};
`;

export const Layout = props => (
	<LayoutWrapper className={props.className}>
		<LayoutContainer contained={props.contained}>
			{props.children}
		</LayoutContainer>
	</LayoutWrapper>
);

export default Layout;
