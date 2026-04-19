/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === "1";
const basePath = isPages ? "/economics-civilization" : "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: isPages ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: isPages,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
