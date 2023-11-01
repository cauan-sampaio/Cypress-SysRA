

const junit = require("cypress-junit-reporter");

module.exports = (on, config) => {
  on("after:spec", (spec, results) => {
    if (results && results.stats.failures > 0) {
      return null;
    }
    return junit(results);
  });
};
