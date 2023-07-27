function createStudent(studentName, grade) {
  return {
    studentName,
    grade,
    courses: [],
    notes: {},
    
    info: function() {
      console.log(`${this.studentName} is a ${grade} year student.`);
    },
    
    addCourse: function(course) {
      this.courses.push(course);
    },
    
    listCourses: function() {
      return this.courses;
    },
    
    addNote: function(courseCode, note) {
      if (this.notes.hasOwnProperty(courseCode)) {
        this.notes[courseCode].push(note);
      } else {
        this.notes[courseCode] = [note];
      }
    },
    
    viewNotes: function() {
      for (let courseCode in this.notes) {
        let courseName = this.courses.filter(course => {
          return course['code'].toString() === courseCode;
        })[0]['name'];
        
        let courseNotes = this.notes[courseCode].join('; ');
        
        console.log(`${courseName}: ${courseNotes}`);
      }
    },
    
    updateNote: function(courseCode, note) {
      if (this.notes.hasOwnProperty(courseCode)) {
        this.notes[courseCode] = [note];
      } else {
        console.log('Course notes for specified course do not exist');
      }
    }
  };
}


function createSchool() {
  return {
    students: {},
    
    addStudent: function(studentName, grade) {
      if (!['1st', '2nd', '3rd', '4th', '5th'].includes(grade)) {
        console.log('Invalid Year');
      }
      
      let newStudent = createStudent(studentName, grade);
      
      if (this.students.hasOwnProperty(studentName)) {
        console.log('Student already enrolled');
      } else {
        this.students[studentName] = newStudent;
      }
      
      return newStudent;
    },
    
    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode});
    },
    
    addGrade: function(student, course, grade) {
      let studentCourses = student['courses'];
      
      studentCourses.forEach(enrolledCourse => {
        if (enrolledCourse['name'] === course) {
          enrolledCourse['grade'] = grade;
        }
      });
    },
    
    getReportCard: function(student) {
      let studentCourses = student['courses'];
      
      studentCourses.forEach(enrolledCourse => {
        let courseName = enrolledCourse['name'];
        let grade = enrolledCourse['grade'] ? enrolledCourse['grade'] : 'In Progress';
        
        console.log(`${courseName}: ${grade}`);
      });
    },
    
    courseReport: function(courseName) {
      let courseGrades = {};
      
      for (let student in this.students) {
        let studentCourses = this.students[student].listCourses();
        
        studentCourses.forEach(stuCourse => {
          if (stuCourse['name'] === courseName) {
            if (stuCourse['grade']) {
              courseGrades[this.students[student].studentName] = stuCourse['grade'];
            }
          }
        }, this);
      }
      
      if (Object.keys(courseGrades).length === 0) {
        console.log(undefined);
        return undefined;
      }
      
      console.log(`=${courseName}=`);
      
      for (let student in courseGrades) {
        console.log(`${student}: ${courseGrades[student]}`);
      }
      console.log('---');
      
      let courseAvg = Object.values(courseGrades).reduce((sum, grade) => sum + grade, 0) / Object.values(courseGrades).length;
      
      console.log(`Course Average: ${courseAvg}`);
    },
  };
}

let school = createSchool();
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