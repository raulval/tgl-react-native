module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            services: "./src/services",
            shared: "./src/shared",
            styles: "./src/styles",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "react-native-dotenv",
        },
      ],
    ],
  };
};
