export default function getStudentsByLocation(list, city) {
  if (typeof city !== 'string') return 'Invalid City!';
  if (!Array.isArray(list)) return 'Invalid list!';
  const res = list.filter((student) => student.location === city);
  return res;
}
