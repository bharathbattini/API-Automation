const { defineConfig } = require("cypress");

const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  watchForFileChanges: false,
  port: 4200,
  video: true,
  allure: true,
  allureResultsPath: "allure-results",
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,

  setupNodeEvents(on, config) {
    on("file:preprocessor", webpackPreprocessor);
    allureWriter(on, config);
    return config;
  },

  env: {
    allureReuseAfterSpec: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
