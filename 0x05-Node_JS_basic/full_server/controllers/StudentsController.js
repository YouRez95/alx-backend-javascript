const readDatabase = require('../utils');

const path = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path).then((data) => {
      const responses = ['This is the list of our students'];

      for (const [key, value] of Object.entries(data)) {
        responses.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      return response.status(200).send(responses.join('\n'));
    }).catch((err) => response.status(500).send(err.message));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(path)
      .then((data) => response.send(`List: ${data[request.params.major].join(', ')}`))
      .catch((err) => response.status(500).send(err.message));
  }
}

module.exports = StudentsController;
