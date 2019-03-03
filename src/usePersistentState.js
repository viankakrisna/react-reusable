import { useEffect } from "react";
import { useGlobalState } from "./useGlobalState";

const usePersistentState = (path, name) => {
  const [state, setState] = useGlobalState(path);
  useEffect(
    () => {
      localStorage.setItem(name, JSON.stringify(state));
    },
    [state]
  );
  return [state, setState];
};

export default usePersistentState;
