export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) return 0;
  const listOfIds = list.map((student) => student.id);
  const result = listOfIds.reduce((acc, curr) => acc + curr);
  return result;
}
