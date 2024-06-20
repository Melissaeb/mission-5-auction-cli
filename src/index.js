// Require the yargs module to handle command-line arguments
const yargs = require("yargs");

// Configure commands using yargs.command
yargs
  .command({
    // Command for seeding data into the database
    command: "seed",
    describe: "Seed data into the database",
    handler: () => {
      require("./seed");
    },
  })
  .command({
    command: "delete",
    describe: "Delete data from the database",
    handler: () => {
      require("./delete");
    },
  })
  .demandCommand(1, "You need to specify a command to run")
  .help().argv;
