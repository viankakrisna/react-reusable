import React from 'react';
import set from 'lodash/fp/set';
import get from 'lodash/get';
import isFunction from 'lodash/isFunction';
import isArray from 'lodash/isArray';

const getValue = e => {
  const value = get(
    e,
    'target.files[0]',
    get(
      e,
      'currentTarget.files[0]',
      get(e, 'target.value', get(e, 'currentTarget.value'))
    )
  );
  if (value instanceof File) {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

const getName = path =>
  isArray(path) ? path.map((e, i) => (i ? `[${e}]` : e)).join('') : path;

export default class Form extends React.Component {
  mounted = false;
  state = {
    loading: false,
    formData: { ...this.props.initialFormData },
    response: false,
  };
  update = (...args) => {
    const { update, mounted } = this;
    if (mounted) {
      update(...args);
    }
  };
  bindFormData = path => {
    const { update, state } = this;
    return {
      value: get(state.formData, path, ''),
      name: getName(path),
      onChange: e => {
        if (e && e.persist) {
          e.persist();
        }
        update(state => ({
          response: false,
          formData: set(path, getValue(e), state.formData),
        }));
      },
    };
  };
  handleSubmit = async e => {
    const { update, props, state } = this;
    const { onSubmit } = props;
    e.preventDefault();
    e.stopPropagation();
    update({ loading: true });
    let response = null;
    try {
      response = await onSubmit(state.formData);
    } catch (e) {
      response = e;
    }
    update({ response, loading: false });
  };
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const { handleSubmit, state, bindFormData, props } = this;
    const { fields, children, renderFields } = props;
    return (
      <form onSubmit={handleSubmit}>
        {isArray(fields) ? fields.map(renderFields || children) : null}
        {isFunction(children) ? children(state, bindFormData) : children}
      </form>
    );
  }
}
