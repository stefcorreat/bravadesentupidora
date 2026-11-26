import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      new URL("https://i.postimg.cc/TPXvKMJ2/5CB6AEBD-1478-45A2-9965-B00450E8E49A.png"),
      new URL("https://i.ibb.co/svFJ5j31/BA7-E7-ECC-15-BD-4-A09-8-C38-F6-DDFF78-F076.png")
    ]
  },
  async redirects() {
    return [
      {source: "/desentupidora-brooklyn/", destination: "/desentupidora-brooklin/", permanent: true},
      {source: "/desentupidora-jangeira/", destination: "/desentupidora-jandira/", permanent: true}
    ];
  }
};

export default nextConfig;

