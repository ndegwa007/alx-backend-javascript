export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const students = typeof getListStudents === 'function' ? getListStudents() : getListStudents;

  const updatedStudents = students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';

    return { ...student, grade };
  });

  const cityList = updatedStudents.filter((student) => student.location === city);
  return cityList;
}
