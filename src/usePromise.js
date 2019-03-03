export const cache = new Map();

const pendingState = new Map();

async function read(promise, key) {
  if (pendingState.get(key)) {
    return;
  }
  if (cache.has(key)) {
    return;
  }
  let result = null;
  pendingState.set(key, true);
  try {
    result = await promise();
  } catch (e) {
    result = e;
  }
  pendingState.set(key, false);
  cache.set(key, result);
}

function useFetch(promise, key) {
  if (!key) {
    return;
  }
  if (pendingState.get(key)) {
    return;
  }

  if (!cache.has(key)) {
    throw read(promise, key);
  }

  const result = cache.get(key);

  if (result instanceof Error) {
    cache.delete(key);
    throw result;
  }
  console.log(result);
  return result;
}

export default useFetch;
