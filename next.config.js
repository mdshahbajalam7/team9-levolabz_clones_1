/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        domains: ['images.unsplash.com'],
      },
}

module.exports = nextConfig

// module.exports = {
//   basePath: '',
//   images: {
//     domains: ['images.unsplash.com','www.example.com'],
//   },
//   swcMinify: true,
// };

// module.exports = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
// }

