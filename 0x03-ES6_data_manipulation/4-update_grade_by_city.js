export default function updateStudentGradeByCity(students, city, newGrades) {
  let listOfStudentsWithGrade = students.filter((student) => student.location === city);
  listOfStudentsWithGrade = listOfStudentsWithGrade.map((student) => {
    const grade = newGrades.find(({ studentId }) => studentId === student.id);
    return ({
      ...student,
      grade: grade ? grade.grade : 'N/A',
    });
  });
  return listOfStudentsWithGrade;
}
