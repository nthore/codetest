// jest.config.js
module.exports = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: "ts-jest",

  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/components/__mocks__/styleMock.js",
    "\\.(scss|less|css)$": "<rootDir>/src/components/__mocks__/styleMock.js",
  },
  modulePathIgnorePatterns: ["__mocks__"],
};
