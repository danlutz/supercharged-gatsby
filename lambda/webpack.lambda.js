/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
require('dotenv').config({ path: __dirname + '/../.env' })

const envKeys = []

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin(
      envKeys.reduce(
        (definitions, key) => ({
          ...definitions,
          [`process.env.${key}`]: JSON.stringify(process.env[key]),
        }),
        {},
      ),
    ),
  ],
}
