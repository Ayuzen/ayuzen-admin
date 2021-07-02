module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8d4dc5c9946f1e9f0c1e16f1d7fb70d4'),
    },
  },
});
