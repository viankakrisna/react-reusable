import styled from 'styled-components';
export { default as MainHeader } from './MainHeader';
export { default as MainContent } from './MainContent';
export const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	right: 0;
	bottom: 0;
	overflow: auto;
	align-content: flex-start;
	top: ${props => props.theme.height.header};
	left: ${props => props.theme.width.sidebar};
`;

export default Main;
