
/*You are task with building a student management system using JavaScript. The system should allow you to
perform various operations on a list of students, including adding, updating, deleting, and dsplaying student
information.
Requirements:
here is an initial array of students. Each student is represented as an object with the following properties: id,
firstName, lastName, age, and grade


Implement the following functions using pure JavaScript (without any external libraries or frameworks):
a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.
*/


const students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 21, grade: 'B' },
    
  ];
  
  function addStudent(student) {
    students.push(student);
  }
  
  function updateStudent(id, updatedInfo) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students[index] = { ...students[index], ...updatedInfo };
    }
  }
  
  function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
    }
  }
  
  function listAllStudents() {
    console.log(students);
  }
  
  function findStudentsByGrade(targetGrade) {
    return students.filter(student => student.grade === targetGrade);
  }
  
  function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
  
  
  addStudent({ id: 3, firstName: 'Alice', lastName: 'Smith', age: 22, grade: 'A' });
  updateStudent(1, { age: 21 });
  deleteStudent(2);
  listAllStudents();
  console.log('Students with Grade A:', findStudentsByGrade('A'));
  console.log('Average Age:', calculateAverageAge());
  