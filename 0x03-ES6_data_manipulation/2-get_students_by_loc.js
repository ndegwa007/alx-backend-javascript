export default function getStudentsByLocation(list, city) {
  if (typeof city !== 'string') return 'Invalid City!';
  const res = list.filter((student) => student.location === city);
  return res;
}
