const yargs = require("yargs");

yargs
  .command({
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
