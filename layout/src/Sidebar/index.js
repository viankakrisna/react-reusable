import styled, { css } from 'styled-components';

export const Sidebar = styled.div`
	display: flex;
	max-width: ${props => props.theme.width.sidebar};
	position: absolute;
	left: 0;
	top: ${props => props.theme.height.header};
	bottom: 0;
	overflow: auto;
	${props => (props.flat ? css`` : css`
		background: ${props => props.theme.backgroundColor.sidebar || 'white'};
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
	`)}
	color: rgba(0,0,0,0.54);
	z-index: 999;
	svg {
		position: absolute;
		left: 24px;
		top: 8px;
		pointer-events: none;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		flex: 0 0 100%;
		margin: 0;
		li {
			display: flex;
			flex: 0 0 100%;
			line-height: 20px;
			flex-wrap: wrap;
			position: relative;
		}
		a {
			display: flex;
			flex: 0 0 100%;
			padding: 8px 24px 8px 48px;
			color: inherit;
			text-decoration: none;
			transition: 250ms;
			&:hover {
				background: #eee;
			}
		}
		h4 {
			display: flex;
			padding: 1em 24px;
			flex: 0 0 100%;
			margin: 0;
			text-transform: uppercase;
			font-size: 0.75em;
			font-weight: 400;
		}
	}
`;

export default Sidebar;
