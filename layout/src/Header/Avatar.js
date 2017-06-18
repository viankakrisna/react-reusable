import styled from 'styled-components';
export const Avatar = styled.div`
	font-size: 22px;
	line-height: 64px;
	color: ${props => props.theme.color.primary};
	background: ${props => props.theme.backgroundColor.avatar || 'rgba(0,0,0,0.25)'};
	font-family: sans-serif;
	padding: 0;
	border-radius: 50%;
	width: ${props => props.theme.height.headerInner};
	height: ${props => props.theme.height.headerInner};
	cursor: pointer;
	border: 0;
`;

export default Avatar;
