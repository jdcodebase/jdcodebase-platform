/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jdcodebase.vercel.app",
  generateRobotsTxt: true,
  outDir: "./public",
  sitemapSize: 1000,
  sourceDir: ".next", // 👈 Needed for output: 'export' builds
};
