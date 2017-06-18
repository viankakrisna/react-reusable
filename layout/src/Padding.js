export const Padding = styled.div`
	padding: ${props => props.padding};
	padding: ${props => [props.top, props.right, props.bottom, props.left]
		.map(e => String(e || 0) + (Number.isInteger(e) ? 'px' : ''))
		.join(' ')};
	padding: ${props => String(props.all) + (Number.isInteger(props.all) ? 'px' : '')};

`;
