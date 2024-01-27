function displayStudentInfo(student) {
    for (let property in student) {
        if (student.hasOwnProperty(property)) {
            console.log(` Property:${property},value:${student[property]}`);
        }
    }
}

// Example usage:
const studentObject = {
    name: 'John Doe',
    age: 20,
    grade: 'A',
    subject: 'Math',
    // Add more properties as needed
};

displayStudentInfo(studentObject);
