/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        "@google-cloud/firestore": "commonjs @google-cloud/firestore",
      });
    }
    return config;
  },
};

export default nextConfig;
