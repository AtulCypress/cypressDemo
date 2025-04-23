const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  downloadsFolder: 'cypress/fixtures/cqvTemplateDownload',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'IPM Automation Report',
    videoOnFailOnly: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: false,
    screenshotOnRunFailure: true,
    overwrite: true,
    html: true,
    json: true,
    screenshotsFolder: "screenshots",
    timestamp: 'mmddyyyy_HHMMss'
  },

  env: {
    defaultCommandTimeout: 10000,
    URL: 'https://calendly.com/login',
    username: 'hcltest243@gmail.com',
    password: '@gmail.com',
  },
  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      testIsolation: false,
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
