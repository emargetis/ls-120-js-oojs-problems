function createStudent(name, grade) {
  return {
    name,
    grade,
    courses: [],
    
    info() {
      console.log(`${this.name} is a ${this.grade} year student`);
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