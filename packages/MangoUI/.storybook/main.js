const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
      '@storybook/addon-viewport',
      '@storybook/addon-knobs',
      '@storybook/addon-storysource',
      '@storybook/addon-actions',
      ],
    webpackFinal: async config => {
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        });

        config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../'),
        });

        config.resolve.extensions.push('.ts', '.tsx');
        return config;
      },
};
