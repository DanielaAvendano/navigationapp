module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ///This plugin should be last
    'react-native-reanimated/plugin',
  ],
};
