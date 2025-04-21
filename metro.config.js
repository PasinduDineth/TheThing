// metro.config.js
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve("react-native-sass-transformer"),
  },
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, "scss", "sass"],
  },
});
