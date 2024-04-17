interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
};

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
};

class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home';
  };

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  };

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  };
}

class Teacher implements TeacherInterface {

  workFromHome(): string {
    return 'Cannot work from home';
  };

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  };

  workTeacherTasks(): string {
    return 'Getting to work'
  };
}


function createEmployee(salary: number | string ): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}


function isDirector(employee: Teacher | Director) {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
}
