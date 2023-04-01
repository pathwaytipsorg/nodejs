// Class 1 : fs module to write data to a file (*.out, *.csv, *.txt)
const abc = require("fs");

f.writeFileSync("firstExample.out", "Hello");

abc.appendFileSync("firstExample.out", " testing my abc const");

//Class 2 : Return Method : To specify the value that a function should return.
const getMyData = function (a, b) {
  return a - b;
};

const msg = getMyData(5, 12);

console.log(msg);

//Class 3 : Export single function and values from a module by either using module.exports
const getSubRes = require("./method");

const msg = getSubRes(15, 9);

console.log(msg);

//Class 4: A library of string validators and sanitizers.
//npm i validator@13.9.0
const val = require("validator");

console.log(val.isEmail("varun123@gmail.com"));

console.log(val.isURL("http://google.com"));

//Class 5: To style terminal strings 
//npm install chalk@4.1.2
const val = require("chalk");

const msg = val.red.inverse.bold("Success!");

console.log(msg);

console.log(val.blue.inverse.bold("Hello") + " World" + val.red("!"));

//Class 6 : Export functions and values from a module by either using module.exports
const getSubRes = require("./method");

const msg = getSubRes.getSubRes(15, 9);

console.log(msg);
