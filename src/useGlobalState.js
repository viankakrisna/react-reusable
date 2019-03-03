import createGlobalState from "./createGlobalState";

const proxify = target =>
  new Proxy(target, {
    set(obj, prop, value) {
      obj[prop] = value;
      console.log(obj);
      return true;
    },
    get(obj, prop) {
      return obj[prop];
    }
  });

const initialState = {
  tasks: {},
  taskTimes: {},
  time: Date.now(),
  taskName: ""
};

const useGlobalState = createGlobalState(initialState);

export default useGlobalState;
