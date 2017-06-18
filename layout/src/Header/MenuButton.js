import React from 'react';
import styled from 'styled-components';
import Menu from 'react-icons/lib/md/menu';

export const MenuButton = styled.button`
	border: 0;
	font-size: 22px;
	line-height: 36px;
	color: ${props => props.theme.color.primary};
	font-family: sans-serif;
	padding: 0;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	align-content: center;
	transition: 250ms;
	background: rgba(255,255,255,0);
	&:active {
		background: rgba(255,255,255,0.1);
		border-radius: 0;http://localhost:3000/#
		outline: none;
	}
	&:hover,
	&:focus {
		background: rgba(255,255,255,0.25);
		outline: none;
	}
`;
MenuButton.defaultProps = {
	children: <Menu />,
};
export default MenuButton;
