function createStudent(studentName, year) {
  return {
    studentName,
    year,
    courses: [],
    
    info() {
      console.log(`${this.studentName} is a ${this.grade} year student`);
    },
    
    listCourses() {
      console.log(this.courses);
    },
    
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    
    addNote(courseCode, newNote) {
      for (let i = 0; i < this.courses.length; i ++) {
        if (this.courses[i]['code'] === courseCode) {
          if (this.courses[i].hasOwnProperty('note')) {
            this.courses[i]['note'] += `; ${newNote}`;
          } else {
            this.courses[i]['note'] = newNote;
          }
          break;
        }
      }
    },
    
    viewNotes() {
      for (let i = 0; i < this.courses.length; i ++) {
        if (this.courses[i].hasOwnProperty('note')) {
          console.log(`${this.courses[i]['name']}: ${this.courses[i]['note']}`);
        }
      }
    },
    
    updateNote(courseCode, newNote) {
      for (let i = 0; i < this.courses.length; i ++) {
        if (this.courses[i]['code'] === courseCode) {
          this.courses[i]['note'] = newNote;
          break;
        }
      }
    }
    
  };
}

let school = {
  students: [],
  
  addStudent(studentName, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      console.log('Please enter a valid year');
      return;
    }
    
    let newStudent = createStudent(studentName, year);
    this.students.push(newStudent);
    return newStudent;
  },
  
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({'name': courseName, 'code': courseCode});
  },
  
  addGrade(student, courseName, grade) {
    let selectedStudent = this.students.filter(enrolledStudent => {
      return enrolledStudent === student;
    })[0];
    
    let course = selectedStudent.courses.filter(course => {
      return course.name === courseName;
    })[0];
    
    course['grade'] = grade;
  },
  
  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In Progress`);
      }
    });
  },
  
  courseReport(courseName) {
    let studentGrades = [];
    
    this.students.map(student => {
      let relevantCourse = student.courses.filter(course => {
        return course.name === courseName;
      });
      
      if (relevantCourse[0] && relevantCourse[0]['grade']) {
        studentGrades.push([student.studentName, relevantCourse[0]['grade']]);
      }
    });
    
    if (studentGrades.length > 0) {
      console.log(`=${courseName} Grades=`);
      
      studentGrades.forEach(student => {
        console.log(`${student[0]}: ${student[1]}`);
      });
      
      let courseAvg = studentGrades.reduce((accum, student) => {
        return accum += student[1];
      }, 0) / studentGrades.length;
      
      console.log('---');
      console.log(`Course Average: ${courseAvg}`);
    } else {
      console.log('undefined');
    }
  }
};

let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');