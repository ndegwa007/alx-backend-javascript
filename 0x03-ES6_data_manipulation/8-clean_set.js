export default function cleanSet(s, n) {
  const res = [];
  if (n === '') { return ''; }
  for (const str of s) {
    if (str.startsWith(n)) {
      res.push(str.slice(n.length));
    }
  }
  return res.join('-');
}
