const chalk = require("chalk");
const f = require("fs");

const addStudentRecords = (name, age, code) => {
  const oldStudentDetails = getStudentRecords();
  const duplicateNotes = oldStudentDetails.filter((st) => st.code === code);

  if (duplicateNotes.length === 0) {
    oldStudentDetails.push({
      name: name,
      age: age,
      code: code,
    });
    saveStudentRecords(oldStudentDetails);
    console.log(chalk.green.inverse("New record added!"));
  } else {
    console.log(chalk.red.inverse("Note record taken!"));
  }
};

const getStudentRecords = function () {
  try {
    const dBuffer = f.readFileSync("json-records.json");
    const dJSON = dBuffer.toString();
    const students = JSON.parse(dJSON);
    return students;
  } catch (e) {
    return [];
  }
};

const saveStudentRecords = function (students) {
  const dataJSON = JSON.stringify(students);
  f.writeFileSync("json-records.json", dataJSON);
};

const removeStudentRecords = function (code) {
  const students = getStudentRecords();
  const studentsToKeep = students.filter(function (student) {
    return student.code !== code;
  });
  //console.log(students.length + " + " + studentsToKeep.length);
  if (students.length > studentsToKeep.length) {
    console.log(chalk.green.inverse("Student record removed!"));
    saveStudentRecords(studentsToKeep);
  } else {
    console.log(chalk.red.inverse("No record found!"));
  }
};

module.exports = { addStudentRecords, getStudentRecords, removeStudentRecords };
