var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  // webpack5: false,
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.myworker\.(t|j)s$/,
    //   use: {
    //     loader: 'worker-loader',
    //     options: {
    //       publicPath: '/workers/',
    //     },
    //   },
    // });

    return config;
  },
};
