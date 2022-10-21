const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: '/lucky-duck',
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      compress: true,
      allowedHosts: "all",
    },
  },
});
