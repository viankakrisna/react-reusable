import React from 'react';
import styled, { css } from 'styled-components';

export const Box = styled(props => (
	<div className={props.className}>
		<div>
			{props.children}
		</div>
	</div>
))`
	${props => (props.ar ? css`&:before {
		content: '';
		display: block;
		padding-top: ${props => props.ar * 100}%;
	}
	position: relative;
	> div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}` : '')}
	${props => (props.textAlign ? css`
		text-align: ${props.textAlign};
		` : '')}
`;

export default Box;
