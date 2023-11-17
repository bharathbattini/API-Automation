const { defineConfig } = require("cypress")

module.exports = defineConfig({
  watchForFileChanges: false,
  port: 4200,
  video: true,
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    screenshotOnRunFailure: true,
    json: true,
    html: false,
    charts: true,
    reportPageTitle: '1 Finance EOS Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      allureReuseAfterSpec: true,
      experimentalOriginDependencies: false,

      googleRefreshToken: "1//04ZAWLHlZW-soCgYIARAAGAQSNwF-L9IrkjCCYdrae2wB3hdBnLqrSaP4qL1M8ZUJ5yYodOKrM-m4kSkBbN5cB4Zl1FzOAW68YZI",
      googleClientId: '1021723456737-kai3o2k1k9fnn40lflkv065nkr5vcfcd.apps.googleusercontent.com',
      googleClientSecret: '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',

    },
  },
});
