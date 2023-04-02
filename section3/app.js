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
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

yargs.parse()
