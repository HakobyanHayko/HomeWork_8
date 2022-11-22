function getMaxElem(arr) {
  if (arr.length === 0) return undefined;
  if (arr.length === 1) return arr[0];
  if (arr[0] > arr[1]) {
    arr[1] = arr[0];
  }
  arr.shift();

  return getMaxElem(arr);
}
console.log(getMaxElem([]));
