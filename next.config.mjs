/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";`,
  },
};

export default nextConfig;
