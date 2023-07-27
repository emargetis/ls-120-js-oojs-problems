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
      console.log(this.courses);
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



let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"