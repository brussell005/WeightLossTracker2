// @ts-check
// Protractor configuration file, see link for more information
// https://www.amadousall.com/angular-e2e-with-cucumber/

const reporter = require("cucumber-html-reporter");
const exec = require("shelljs.exec");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/features/**/*.feature"],
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  cucumberOpts: {
    require: ["./src/steps/**/*.steps.ts"],
    tags: ["@FE"],
    format: `json:${__dirname}/coverage/results.json`,
  },
  capabilities: {
    browserName: "chrome",
  },
  restartBrowserBetweenTests: true,
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json"),
    });
  },
  beforeLaunch() {
    exec(`mkdir -p ${__dirname}/coverage && rm -rf ${__dirname}/coverage/*`);
  },
  onCleanUp() {
    console.log("Completed! Generating the test result report /e2e/coverage/");
    const options = {
      theme: "bootstrap",
      jsonFile: `${__dirname}/coverage/results.json`,
      output: `${__dirname}/coverage/index.html`,
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      ignoreBadJsonFile: true,
      launchReport: true,
    };
    reporter.generate(options);
  },
};