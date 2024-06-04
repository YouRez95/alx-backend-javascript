/**
 * Reading a file asynchronously with Node JS
 */

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
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
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      return resolve();
    });
  });
}
module.exports = countStudents;
