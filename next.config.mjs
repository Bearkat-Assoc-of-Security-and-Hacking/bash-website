/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        "@google-cloud/firestore": "commonjs @google-cloud/firestore",
        "firebase-admin": "commonjs firebase-admin",
      });
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      stream: false,
      crypto: false,
      net: false,
      tls: false,
    };
    return config;
  },
  serverExternalPackages: ["firebase-admin", "@google-cloud/firestore"], // Updated from experimental.serverComponentsExternalPackages
};

export default nextConfig;
