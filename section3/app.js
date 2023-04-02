const chalk = require('chalk')
const yargs = require('yargs')
const getMethod = require("./method");

yargs.command({
  command: "add",
  //describe: "Add student records",
  builder: {
    name: {
      //describe: "Add name",
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
  handler: function (argv) {
    getMethod.addStudentRecords(argv.name, argv.age, argv.code);
  },
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove student record',
    builder: {
        title: {
            describe: 'Students Code',
            demandOption: code,
            type: 'string'
        }
    },
    handler: function (argv) {
        getMethod.removeStudentRecords(argv.code)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        getMethod.getStudentRecords()
    }
})

yargs.parse()
