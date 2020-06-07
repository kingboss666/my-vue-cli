// 开发调试时需要将 共同配置合并开发配置
const webpackBase = require("webpack-merge")
const baseConfig = require("./base.config")
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = webpackBase(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin(),
        new webpack.BannerPlugin('这是在js压缩后添加的版权声明')
    ]
})