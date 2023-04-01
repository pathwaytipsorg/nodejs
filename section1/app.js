// Class 1 : fs: writing data to file
const abc = require("fs");

f.writeFileSync("firstExample.out", "Hello");

abc.appendFileSync("firstExample.out", " testing my abc const");

//Class 2 : Return Method
const getMyData = function (a, b) {
  return a - b;
};

const msg = getMyData(5, 12);

console.log(msg);

//Class 3
const getSubRes = require("./method");

const msg = getSubRes(15, 9);

console.log(msg);

//Class 4: validator
const val = require("validator");

console.log(val.isEmail("varun123@gmail.com"));

console.log(val.isURL("http://google.com"));

//Class 5: Pretty Output
const val = require("chalk");

const msg = val.red.inverse.bold("Success!");

console.log(msg);

console.log(val.blue.inverse.bold("Hello") + " World" + val.red("!"));

//Class 6
const getSubRes = require("./method");

const msg = getSubRes.getSubRes(15, 9);

console.log(msg);
