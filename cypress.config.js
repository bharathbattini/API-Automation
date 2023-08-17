const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  port: 4200,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
