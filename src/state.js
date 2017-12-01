import React from "react";

const merge = Object.assign;

export default (state, handleUpdate) => {
  const subscribers = [];
  const currentState = merge(state, {
    set: (...args) => {
      subscribers.forEach(subscriber => subscriber.setState(...args));
      return state;
    }
  });

  return function connect(Component) {
    return class extends React.PureComponent {
      static displayName = `connected(${Component.name ||
        Component.displayName})`;
      state = currentState;

      handleUpdate = oldState => {
        if (typeof handleUpdate === "function") {
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
        if (subscribers.indexOf(this) === 0) {
          merge(currentState, this.state);
          this.handleUpdate(oldState);
        }
      }
      render() {
        return <Component {...this.props} {...this.state} />;
      }
    };
  };
};
