const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  watchForFileChanges: false,
  port: 4200,
  video: false,
  allure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      module.exports = (on, config) => {

        allureWriter(on, config);
        return config;
      };

    },
  },
});
