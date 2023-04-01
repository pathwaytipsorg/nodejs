const f = require("fs");

const addStudentRecords = function (name, age, code) {
  //getStudentRecords();

  const oldStudentDetails = getStudentRecords();
  oldStudentDetails.name = name;
  oldStudentDetails.age = age;
  const stJSON = JSON.stringify(oldStudentDetails);

  f.writeFileSync("json-3.json", stJSON);
};

const getStudentRecords = function () {
  const dBuffer = f.readFileSync("json-1.json");

  const dJSON = dBuffer.toString();

  const student = JSON.parse(dJSON);

  //console.log(student.name);
  return student;
};

module.exports = { addStudentRecords, getStudentRecords };
