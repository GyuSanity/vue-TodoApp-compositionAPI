const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  server: {
    port: 8000,
  },
  transpileDependencies: true,
});
