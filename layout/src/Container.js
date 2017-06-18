import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: ${props => props.theme.width.container || '1024px'};
	margin: auto;
	display: flex;
	align-items: inherit;
	position: relative;
	min-height: 100%;	
`;

export default Container;
