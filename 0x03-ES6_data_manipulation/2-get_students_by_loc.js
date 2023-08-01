export default function getStudentsByLocation(list, city) {
  const res = list.filter((student) => student.location === city);
  return res;
}
