// Class 7
console.log(process.argv);

const parm1 = process.argv[2];

if (parm1 === "add") {
   console.log("You can add");
}

//class 8: yargs
const yargs = require("yargs");
const getMethod = require("./method");
//console.log(process.argv);
yargs.command({
  command: "list",
  handler: function () {
    getMethod.getStudentRecords();
  },
});

yargs.command({
  command: "add",
  //describe: "Add a note",
  builder: {
    name: {
      //describe: "Add name",
      demandOption: true,
      type: "string",
    },
    age: {
      demandOption: true,
      type: "int",
    },
    code: {
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    getMethod.addStudentRecords(argv.name, argv.age, argv.code);
  },
});

//console.log(yargs.argv);
yargs.parse();