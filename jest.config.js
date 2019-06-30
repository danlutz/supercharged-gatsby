/* eslint-disable @typescript-eslint/no-var-requires */
// https://www.gatsbyjs.org/docs/unit-testing/

const { defaults } = require('jest-config')

module.exports = {
  ...defaults,
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    '^.+\\.ts(x)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
}
