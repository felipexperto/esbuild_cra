module.exports = {
  "verbose": true,
  "transform": {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/index.js"
  ],
  "modulePaths": [
    "<rootDir>/src/"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
