/*3. Object Extensibility and Sealing
a) Use the Object.preventEatensions method to prevent any further additions of properties to the student object.
b) Use the Object.isEatensible method to check if the stu"ent object is eatensible. Store the result in a variable
called eatensibleStatus.
c) Create a new object calle" teacher with a 'subject' propert> set to 'Math'.
d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
sealed Status.
f) Print the eatensibleStatus and sealed Status to the console.*/


// Create a student object
const student = {
    name: 'John',
    age: 20,
    grade: 'A',
  };
  

  Object.preventExtensions(student);
  
  
  const extensibleStatus = Object.isExtensible(student);
  
  
  const teacher = {
    subject: 'Math',
  };
  
  
  Object.seal(teacher);
  
  
  const sealedStatus = Object.isSealed(teacher);
  
  console.log('Extensible Status:', extensibleStatus);
  console.log('Sealed Status:', sealedStatus);
  