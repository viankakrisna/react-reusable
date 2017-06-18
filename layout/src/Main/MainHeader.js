import styled from 'styled-components';

export const ContentHeader = styled.div`
	display: flex;
	flex: 0 0 100%;
	padding: 0 1.5em;
	background: ${props => props.theme.backgroundColor.primary};
	color: ${props => props.theme.color.primary};
	height: 2.5em;
	line-height: 2.5em
	font-size: 1.5em;
	align-items: center;
`;

export default ContentHeader;
