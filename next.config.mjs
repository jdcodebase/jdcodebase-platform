/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 Required for static build
  experimental: {
    typedRoutes: true, // 👌 this is fine here
  },
};

export default nextConfig;
