module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.png'],
          alias: {
            tests: ['./tests/'],
            '@components': './src/components',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
