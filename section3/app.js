const yargs = require("yargs");
const getMethod = require("./method");

yargs.command({
  command: "add",
  describe: "Add student records",
  builder: {
    name: {
      describe: "Add student records",
      demandOption: true,
      type: "string",
    },
    age: {
      demandOption: true,
      type: "number",
    },
    code: {
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    getMethod.addStudentRecords(argv.name, argv.age, argv.code);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove student record",
  builder: {
    code: {
      describe: "Students Code",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    getMethod.removeStudentRecords(argv.code);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    getMethod.getStudentRecords();
  },
});

yargs.parse();
