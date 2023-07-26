export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (let value of array) {
    value = appendString + value;
    newArr.push(value);
  }

  return newArr;
}
