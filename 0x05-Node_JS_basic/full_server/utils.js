const fs = require('fs');

function readDatabase(path) {
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
      return resolve(fields);
    });
  });
}

module.exports = readDatabase;
