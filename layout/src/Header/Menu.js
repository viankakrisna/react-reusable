import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled(Link)`
	border: 0;
	font-size: ${props => props.theme.font.size.base};
	display: inline-flex;
	line-height: ${props => props.theme.height.header};
	color: inherit;
	padding: 0;
	padding: 0 1em;
	cursor: pointer;
	align-content: center;
	transition: 250ms;
	border-bottom: 2px solid transparent;
	text-decoration: none;
	&:active {
		border-bottom: 2px solid ${props => props.theme.borderColor.menu};
		outline: none;
	}
	&:hover,
	&:focus {
		border-bottom: 2px solid ${props => props.theme.borderColor.menu};
		outline: none;
	}
	flex: 0 0 auto;
`;
Menu.defaultProps = {
	to: '/',
	children: 'Link',
};
export default Menu;
