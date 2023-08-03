export default function setFromArray(arr) {
  const res = new Set();
  arr.map((i) => res.add(i));
  return res;
}
