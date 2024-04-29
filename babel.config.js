module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          hooks: './src/hooks',
          icons: './src/assets/icons',
          navigation: './src/navigation',
          locales: './src/locales',
          containers: './src/containers',
          layouts: './src/layouts',
          screens: './src/screens',
          styles: './src/styles',
          utils: './src/utils',
          storybook: './storybook',
          types: './src/types',
          api: './src/api',
          logging: './src/logging',
          data: './src/data',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        root: './src/',
      },
    ],
    'react-native-reanimated/plugin',
  ],
  presets: [
    'module:metro-react-native-babel-preset',
  ],
};
