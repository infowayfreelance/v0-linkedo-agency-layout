/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep metadata in <head> for SEO audits and crawlers instead of streaming it
  // into the page body after the initial HTML has been sent.
  htmlLimitedBots: /.*/,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
