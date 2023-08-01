export default function getListStudentIds(array) {
  const arr = typeof array === 'function' ? array() : array;
  if (!Array.isArray(arr)) return [];
  const result = arr.map((student) => student.id);
  return result;
}
