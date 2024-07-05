/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";`,
  },
};

export default nextConfig;
