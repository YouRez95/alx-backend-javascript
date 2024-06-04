/**
 * Create a more complex HTTP server using Node's HTTP module
 */

const http = require('http');
const fs = require('fs');

const path = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.log('Cannot load the database');
        return reject(err);
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

      const responses = [`Number of students: ${students.length}`];
      for (const [key, value] of Object.entries(fields)) {
        responses.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      return resolve(responses);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    countStudents(path).then((response) => {
      res.end(response.join('\n'));
    }).catch((err) => {
      res.end(err.message);
    });
  }
});

app.listen(1245);

module.exports = app;
