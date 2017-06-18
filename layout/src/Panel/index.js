import styled, { css } from 'styled-components';

export const PanelHeading = styled.div`
	display: flex;
	flex: 0 0 100%;
	padding: ${props => props.theme.font.size.half};
	background: #f6f7f9;
	border: ${props => props.theme.border.panel || 'none'};
	${props => (props.theme.borderColor.panel ? css`borderColor: ${props.theme.borderColor.panel}` : '')};
	margin-bottom: -1px;
`;

export const Panel = styled.div`
	display: flex;
	flex: 0 0 100%;
	flex-wrap: wrap;
	padding: ${props => props.theme.font.size.base};
	background: ${props => props.theme.color.panel || 'white'};
	border: ${props => props.theme.border.panel || 'none'};
	${props => (props.theme.borderColor.panel ? css`borderColor: ${props.theme.borderColor.panel}` : '')};
	color: ${props => props.theme.color.panelText || 'black'};
	margin-bottom: ${props => props.theme.font.size.base};
`;

export default Panel;
