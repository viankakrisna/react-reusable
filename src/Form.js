import React from 'react';
import set from 'lodash/fp/set';
import get from 'lodash/get';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';

export default class Form extends React.Component {
	state = {
		loading: false,
		formData: { ...this.props.formData },
		response: false,
	};
	bindFormData = path => {
		return {
			onChange: e =>
				this.setState({
					response: false,
					formData: set(path, e.target.value, this.state.formData),
				}),
			value: get(this.state.formData, path, ''),
			name: this.getName(path),
		};
	};
	getName = path => (isArray(path) ? path.join('.') : path);
	handleSubmit = async e => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({ loading: true });
		let response = null;
		try {
			response = await this.props.onSubmit(this.state.formData);
		} catch (e) {
			response = e;
		}
		this.setState({ response, loading: false });
	};
	render() {
		const { fields, children } = this.props;
		return (
			<form onSubmit={this.handleSubmit}>
				{isArray(fields) ? fields.map(this.props.renderFields || this.props.children) : null}
				{isFunction(children) ? children(this.state, this.bindFormData) : children}
			</form>
		);
	}
}
