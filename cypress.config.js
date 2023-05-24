const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    
  "reporter": "mochawesome",
  "reporterOptions": {
      "reportDir": "cypress/reports",
      "reportFilename": "report",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
      //"timestamp": "mmddyyyy_HHMMss"
    }
  },
});
