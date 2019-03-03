import { useEffect } from "react";

const subscribers = new Set();

setInterval(() => {
  const now = Date.now();
  subscribers.forEach(sub => sub(now));
}, 1000);

const useTime = tick => {
  useEffect(() => {
    subscribers.add(tick);
    return () => {
      subscribers.delete(tick);
    };
  });
};

export default useTime;
