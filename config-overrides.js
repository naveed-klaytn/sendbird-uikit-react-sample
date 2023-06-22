module.exports = function override(config, env) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sendbird/chat': 'palm-sdk',
    };
    return config;
  };
  