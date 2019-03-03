import { useState, useEffect } from "react";

// this is the custom hook we'll call on components.
export default function createGlobalState(globalState) {
  const subscribers = new Map();
  return function useStore(key) {
    const [state, setState] = useState(globalState[key]);
    const setAllState = value => {
      subscribers.get(key).forEach(setter => setter(value));
    };

    useEffect(
      () => {
        globalState[key] = state;
      },
      [state]
    );

    useEffect(
      () => {
        if (!subscribers.has(key)) {
          subscribers.set(key, new Set());
        }
        const subscriber = subscribers.get(key);
        subscriber.add(setState);
        return () => {
          subscribers.delete(setState);
        };
      },
      [state, setState]
    );
    return [state, setAllState];
  };
}
