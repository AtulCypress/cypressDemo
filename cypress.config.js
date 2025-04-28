const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Calendly Automation Report',
    videoOnFailOnly: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: true,
    screenshotOnRunFailure: true,
    overwrite: true,
    html: true,
    json: true,
   // video: true,
    screenshotsFolder: "screenshots",
    timestamp: 'mmddyyyy_HHMMss'
  },

  env: {
    defaultCommandTimeout: 10000,
    URL: 'https://calendly.com/app/login',
    username: 'hcltest243@gmail.com',
    password: '@gmail.com',
  },
  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      experimentalStudio: true,
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    projectId: "sks8oc",  // cypress cloud unique project ID
    specPattern: 'cypress/e2e/*.js',
    testIsolation: false,
  },
});
