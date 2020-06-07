const path = require("path")
const webpackBase = require("webpack-merge")
const baseConfig = require("./base.config")

module.exports = webpackBase(baseConfig, {
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: true,
        host: '127.0.0.1'
    }
})