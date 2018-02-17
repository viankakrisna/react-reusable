import React from 'react';
import history from './history';
const subscribers = [];
const container = {};

export default (state, handleUpdate) => {
  Object.assign(container, state, {
    history,
    set: (...args) => {
      subscribers.forEach(subscriber => subscriber.setState(...args));
      return state;
    },
  });

  return function connect(Component) {
    return class extends React.PureComponent {
      static displayName = `connected(${Component.name ||
        Component.displayName})`;
      state = container;

      handleUpdate = oldState => {
        if (typeof handleUpdate === 'function') {
          handleUpdate(this.state, oldState);
        }
      };

      componentWillMount() {
        if (subscribers.indexOf(this) === -1) {
          subscribers.push(this);
          this.handleUpdate(this.props);
        }
      }
      componentWillUnmount() {
        subscribers.splice(subscribers.indexOf(this), 1);
      }
      componentDidUpdate(_, oldState) {
        if (subscribers.includes(this)) {
          Object.assign(container, this.state);
          this.handleUpdate(oldState);
        }
      }
      render() {
        return <Component {...this.props} {...this.state} />;
      }
    };
  };
};

history.listen(() => {
  container.set({ history: { ...history } });
});
