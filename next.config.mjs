/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // This is only for the server-side build
    if (isServer) {
      // Don't bundle the Firestore library, which is the largest part of firebase-admin
      config.externals.push({
        "@google-cloud/firestore": "commonjs @google-cloud/firestore",
      });
    }
    return config;
  },
};

export default nextConfig;
