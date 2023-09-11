const weakMap = new WeakMap();

const queryAPI = (endPoint) => {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 0);
  }
  weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  if (weakMap.get(endPoint) >= 5) { throw new Error('Endpoint load is high'); }
};

export { weakMap, queryAPI };
