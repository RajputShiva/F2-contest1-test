// Array of student objects
let students = [
    {id:1,name:"john",age:"18",marks:80}, 
    {id:2, name:"jack",age:"20", marks:85}, 
    {id:3, name:"karen", age:"19",marks:35}
  ];
  
  // PrintStudentbyMap(): console.log all students with marks over 50 using the .map function.
  function PrintStudentbyMap() {
    let studentsWithMarksOver50 = students.map(function(student) {
      if(student.marks > 50) {
        return student;
      }
    });
    console.log(studentsWithMarksOver50);
  }
  
  // PrintStudentbyForEach(): console.log all the students who have marks over 50 using the .forEach function.
  function PrintStudentbyForEach() {
    let studentsWithMarksOver50 = [];
    students.forEach(function(student) {
      if(student.marks > 50) {
        studentsWithMarksOver50.push(student);
      }
    });
    console.log(studentsWithMarksOver50);
  }
  
  // addData(): In this function, create another student object and append it to the array. For example, push this in the array - {id:4,name:"susan",age:"20",marks:45} and then console.log it.
  function addData() {
    let newStudent = {id:4,name:"susan",age:"20",marks:45};
    students.push(newStudent);
    console.log(students);
  }
  
  // removeFailedStudent(): In this function, remove the student who has failed, i.e. with less than 50 marks. console.log the changed array.
  function removeFailedStudent() {
    students = students.filter(function(student) {
      return student.marks >= 50;
    });
    console.log(students);
  }
  
  // ConcatenateArray(): Create another array with 3 student objects similar to the one in the given array but with different ids and all other parameters.
  function ConcatenateArray() {
    let newStudents = [
      {id:4,name:"Sarah",age:"18",marks:90}, 
      {id:5, name:"Mike",age:"21", marks:75}, 
      {id:6, name:"Emma", age:"20",marks:65}
    ];
    students = students.concat(newStudents);
    console.log(students);
  }
  
  // calling functions
  PrintStudentbyMap();
  PrintStudentbyForEach();
  addData();
  removeFailedStudent();
  ConcatenateArray();
  