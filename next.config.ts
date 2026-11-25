import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {source: "/desentupidora-brooklyn/", destination: "/desentupidora-brooklin/", permanent: true},
      {source: "/desentupidora-jangeira/", destination: "/desentupidora-jandira/", permanent: true}
    ];
  }
};

export default nextConfig;

