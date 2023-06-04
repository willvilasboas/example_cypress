const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },

    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quite": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
   },
   env: { grepFilterSpecs: true, grepOmitFiltered: true },
  },
});
