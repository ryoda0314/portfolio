/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // 旧URL(/lp配下)からのリダイレクト。作品集は /web に改名済み。
    return [
      {
        source: "/lp",
        destination: "/web",
        permanent: true,
      },
      {
        source: "/lp/:path*",
        destination: "/web/:path*",
        permanent: true,
      },
      {
        source: "/lp-thumbs/:path*",
        destination: "/web-thumbs/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
