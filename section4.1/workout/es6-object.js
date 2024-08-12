const firstName = "Tom";
const lastName = "Ran";

const emp = {
  firstName,
  LastName: lastName,
  age: 13,
  salary: undefined,
};

console.log(emp);

//Object destructuring
const lName = emp.LastName;

console.log("Last Name is ", lName);

const { salary = 2000, age: EmpAge } = emp;

console.log("Age is " + EmpAge + " and salary is " + salary);

//
const transaction = (type, { firstName, age=0 }={}) => {
  console.log("Transaction is for " + firstName + " and age is " + age);
};

transaction("newEntry", emp);
