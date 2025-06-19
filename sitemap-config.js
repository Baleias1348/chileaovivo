// Configuración para el sitemap
module.exports = {
  siteUrl: 'https://chileaovivo2.netlify.app',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
