import styled from 'styled-components';
export const FlexGrid = styled.div`
	padding-left: 0.5em;
	padding-right: 0.5em;
`;

export const FlexRow = styled.div`
	display: flex;
	align-items: ${props => props.alignItems || 'inherit'};
	margin-left: -0.5em;
	margin-right: -0.5em;
`;

export const FlexColumn = styled.div`
	flex: ${props => props.flex || '0 0 auto'};
	padding-left: 0.5em;
	padding-right: 0.5em;
`;
