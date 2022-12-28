const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/showMySelf/dist" : "",
  configureWebpack: {},
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        options["compilerOptions"] = {
          ...(options.compilerOptions || {}),
          isCustomElement: (tag) => tag === "v-",
        };
        return options;
      });
  },
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
