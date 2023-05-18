const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    
  "reporter": "mochawesome",
  "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": true,
      "charts": true,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss"
    }
  },
});
