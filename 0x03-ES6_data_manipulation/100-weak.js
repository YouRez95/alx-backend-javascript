export const weakMap = new WeakMap();

let initialQuery = 1;

export const queryAPI = (endpoint) => {
  if (initialQuery >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, initialQuery);
  initialQuery += 1;
};
