const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //allureWriter(on, config);
       // return config;
    },
    
  "reporter": "mochawesome",
  "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "charts": true,
      "html": true,
      "json": false,
      //"timestamp": "mmddyyyy_HHMMss"
    }
  },
});
