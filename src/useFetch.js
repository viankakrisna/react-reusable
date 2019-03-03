import usePromise from './usePromise';

export default function useFetch(url) {
  return usePromise(async () => {
    const res = await fetch(url);
    return res.json();
  }, url);
}
