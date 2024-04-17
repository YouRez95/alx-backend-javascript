interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
};

const student1: Student = {
  firstName: "Youness",
  lastName: "Alouani",
  age: 28,
  location: "Maroc"
};

const student2: Student = {
  firstName: "Mario",
  lastName: "Freen",
  age: 29,
  location: "France",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const cellName = document.createElement('td');
  cellName.textContent = student.firstName;

  const cellLocation = document.createElement('td');
  cellLocation.textContent = student.location;

  row.appendChild(cellName);
  row.appendChild(cellLocation);
  table.appendChild(row);
});
