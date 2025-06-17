// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//
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
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // If your GitHub repo is username.github.io/repo-name, uncomment and update:
  // basePath: '/my_portfolio_live',
  // assetPrefix: '/my_portfolio_live/',

  // Static export configuration
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/skills': { page: '/skills' },
      '/experience': { page: '/experience' },
      '/career': { page: '/career' },
      '/contact': { page: '/contact' },
      '/contributions': { page: '/contributions' },
      '/resume': { page: '/resume' },
      // Remove dynamic routes that need generateStaticParams
      // Add specific static paths if needed
    }
  }
}

module.exports = nextConfig