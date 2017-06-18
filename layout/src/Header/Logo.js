import styled from 'styled-components';
export const Logo = styled.div`
	font-size: 22px;
	line-height: 36px;
	color: ${props => props.theme.color.header || props.theme.color.primary};
	font-family: sans-serif;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;
	flex: 1;
`;
export default Logo;
