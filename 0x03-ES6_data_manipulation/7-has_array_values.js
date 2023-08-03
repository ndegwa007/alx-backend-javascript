export default function hasValuesFromArray(s, a) {
  const res = a.map((i) => s.has(i));
  for (const x of res) {
    if (x === false) {
      return false;
    }
  }
  return true;
}
