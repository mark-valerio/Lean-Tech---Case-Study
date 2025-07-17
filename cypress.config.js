const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').default;

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports', 
        reportFilename: 'Test Report',                
        html: true,                               
        charts: true },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
  },
});
