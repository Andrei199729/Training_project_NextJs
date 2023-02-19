/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       resourceQuery: /icon/,
//       use: ["@svgr/webpack"],
//     });
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       resourceQuery: { not: [/icon/] },
//       loader: "next-image-loader",
//       options: { assetPrefix: "" },
//     });
//     return config;
//   },
// };
