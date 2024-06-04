/**
 * Create a more complex HTTP server using Node's HTTP module
 */

const http = require('http');
const fs = require('fs');

const path = process.argv[2];
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    const responses = [];
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        console.log('Cannot load the database');
        throw new Error(err);
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

      responses.push(`Number of students: ${students.length}`);
      for (const [key, value] of Object.entries(fields)) {
        responses.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      res.write('This is the list of our students\n');
      res.write(responses.join('\n'));
      res.end();
    });
  }
});

app.listen(1245);

module.exports = app;
