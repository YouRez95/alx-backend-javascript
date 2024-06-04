const fs = require('fs');
const express = require('express');

const app = express();
const path = process.argv[2];
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

      const responses = ['This is the list of our students', `Number of students: ${students.length}`];
      for (const [key, value] of Object.entries(fields)) {
        responses.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      return resolve(responses);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path).then((text) => {
    res.send(text.join('\n'));
  }).catch((err) => {
    res.send(['This is the list of our student', err.toString()].join('\n'));
  });
});

app.listen(1245, () => console.log('server running on port 1245'));

module.exports = app;
