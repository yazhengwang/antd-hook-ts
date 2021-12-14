// const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const Webpackbar = require("webpackbar");
const webpack = require("webpack");
//获取当前环境，由cross-env设置的
const REACT_APP_MODE = process.env.REACT_APP_MODE;
//加载对应.env文件的变量
require("dotenv").config({ path: `.env.${REACT_APP_MODE}` });
//因为process.env里面的值很多，所以我们定义一个正则，只有是命名以React_App_开头的变量我们才去设置它
const reg = /^React_App_/;
const env = {};
for (const key in process.env) {
  //只有key为NODE_ENV或者正则校验通过才去设置
  if (key === "NODE_ENV" || reg.test(key)) {
    env[key] = process.env[key];
  }
}

module.exports = {
  // devServer: {
  //  static: './dist',
  //  hot: true,
  // },
  webpack: {
    entry: "./src/index.js",
    // output: {
    //   filename: "bundle.js",
    //   path: path.resolve(__dirname, "dist"),
    // },
    alias: {
      "@": path.join(__dirname, "src"),
    },
    plugins: {
      add: [
        new Webpackbar(),
        // new UglifyJSPlugin(),
        //设置环境变量
        new webpack.DefinePlugin({
          "process.env": JSON.stringify(env),
        }),
      ],
    },
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
