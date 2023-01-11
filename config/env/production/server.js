module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://strapi-on-az.azurewebsites.net",
  admin: {
    url: "https://purple-rock-0c3507710.2.azurestaticapps.net",
    serveAdminPanel: false,
  },
});