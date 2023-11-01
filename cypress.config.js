const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { config } = require("bluebird");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  projectId: 'dg5d4z',
  video: true,
  videosFolder: 'cypress/videos', 
  screenshotsFolder: 'cypress/screenshots', 
  trashAssetsBeforeRuns: true,
  url: 'https://sysra-h.maracanau.ifce.edu.br/login',
  before: () => {
    // Use o comando do sistema para excluir as capturas de tela
    cy.exec('rm -f cypress/screenshots/SYsRAlogin.cy.js*.png');
},
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern : "cypress/e2e/features/*.feature",
    reporter: "cypress-junit-reporter",
    reporterOptions: {
      mochaFile: "junit-report.csv"
    },
    
  },
})





