export class FullHeight extends React.Component {
	state = {
		height: window.innerHeight,
	};
	calculateHeight = e => window.innerHeight;

	componentDidMount() {
		this.calculateHeight();
		window.addEventListener('resize', this.calculateHeight);
	}
	render() {
		return (
			<div style={{ minHeight: this.state.height, ...this.props.style }}>
				{this.props.children}
			</div>
		);
	}
}

export default FullHeight;
