/**
 * Reading a file synchronously with Node JS
 */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const fields = {};
    const students = data.trim().split('\n').slice(1);

    for (const student of students) {
      const studentInfo = student.split(',');
      if (fields[studentInfo[studentInfo.length - 1]] === undefined) {
        fields[studentInfo[studentInfo.length - 1]] = [studentInfo[0]];
      } else {
        fields[studentInfo[studentInfo.length - 1]].push(studentInfo[0]);
      }
    }

    console.log(`Number of students: ${students.length}`);
    for (const [key, value] of Object.entries(fields)) {
      console.log(`Number of students in ${key}: ${value.length} List: ${value.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
