module.exports = {
  webpack: (config, _) => {
    config.resolve.symlinks = false;
    config.module.rules.push({
      test: /jest\/.*/,
      loader: "ignore-loader"
    });
    config.module.rules.push({
      test: /cypress\/.*/,
      loader: "ignore-loader"
    });
    return config;
  }
};
