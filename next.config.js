// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: "/api/sb-contact",
//         headers: [
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET,DELETE,PATCH,POST,PUT",
//           },
//           {
//             key: "Access-Control-Allow-Headers",
//             value:
//               "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
//           },
//         ],
//       },
//     ];
//   },
// };
//
// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports for GitHub Pages
  trailingSlash: true,  // Add trailing slashes to URLs
  images: {
    unoptimized: true  // Disable image optimization for static export
  },
  // If your repo is username.github.io/repo-name, uncomment these:
  // basePath: '/minimal-next-portfolio-master',
  // assetPrefix: '/minimal-next-portfolio-master/',

  // Note: API routes and server-side features won't work with static export
  // You'll need to handle contact form differently (external service, etc.)
}

module.exports = nextConfig