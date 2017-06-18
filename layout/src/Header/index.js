import styled from 'styled-components';
export { default as Logo } from './Logo';
export { default as Avatar } from './Avatar';
export { default as SearchBar } from './SearchBar';
export { default as MenuButton } from './MenuButton';
export { default as Menu } from './Menu';

export const Header = styled.div`
	position: ${props => (props.fixed ? 'fixed' : 'absolute')};
	top: 0;
	left: 0;
	right: 0;
	padding: 0 0;
	background: ${props => props.theme.backgroundColor.header || props.theme.backgroundColor.primary};
	color: ${props => props.theme.color.header || props.theme.color.primary};
	display: flex;
	flex: ${props => props.flex || '0 0 100%'};
	flex-wrap: wrap;
	align-items: center;
	height: ${props => props.theme.height.header || '64px'};
	box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2);
	z-index: 1000;
`;

export default Header;
