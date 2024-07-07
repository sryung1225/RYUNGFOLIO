/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SUPABASE_HOSTNAME,
        pathname: "/storage/v1/object/sign/images/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";`,
  },
};

export default nextConfig;
