const f = require("fs");

const dBuffer = f.readFileSync("json-1.json");

const dJSON = dBuffer.toString();

const student = JSON.parse(dJSON);

//console.log(student["name"]);
//console.log(student.name);

student.name = "Tomm";
student.age = "11";

//console.log(student);

const stJSON = JSON.stringify(student);

f.writeFileSync("json-2.json", stJSON);
