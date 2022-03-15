/* eslint-disable  @typescript-eslint/no-var-requires */
const miniSVGDataURI = require('mini-svg-data-uri');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx$/,
      use: ['@svgr/webpack'],
    });

    // For inlining SVG images used in SCSS stylesheets
    // https://dev.to/smelukov/webpack-5-asset-modules-2o3h
    config.module.rules.push({
      test: /\.svg/,
      issuer: /\.scss$/,
      type: 'asset/inline',
      generator: {
        dataUrl(content) {
          content = content.toString();
          return miniSVGDataURI(content);
        },
      },
      use: 'svgo-loader',
    });

    // Temporary workaround for "generator has an unknown property 'filename'."
    // https://github.com/vercel/next.js/issues/34501#issuecomment-1046655345
    if (config.module.generator?.asset?.filename) {
      if (!config.module.generator['asset/resource']) {
        config.module.generator['asset/resource'] =
          config.module.generator.asset;
      }
      delete config.module.generator.asset;
    }

    return config;
  },
};

module.exports = nextConfig;
