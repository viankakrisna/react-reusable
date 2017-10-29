import React from "react";

const merge = Object.assign;

export default (initialState, handleUpdate) => {
  const subscribers = [];
  const currentState = merge(initialState, {
    set: (...args) => {
      subscribers.forEach(subscriber => subscriber.setState(...args));
    }
  });

  return function connect(Component) {
    return class extends React.PureComponent {
      static displayName = `connected(${Component.name ||
        Component.displayName})`;
      state = currentState;

      componentWillMount() {
        subscribers.push(this);
      }
      componentWillUnmount() {
        subscribers.splice(subscribers.indexOf(this), 1);
      }
      componentDidUpdate(_, oldState) {
        if (subscribers.indexOf(this) === 0) {
          merge(currentState, this.state);
          if (typeof handleUpdate === "function") {
            handleUpdate(this.state, oldState);
          }
        }
      }
      render() {
        return <Component {...this.props} {...this.state} />;
      }
    };
  };
};
