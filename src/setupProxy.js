const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/todos',
    createProxyMiddleware({
      target: 'https://jsonplaceholder.typicode.com',
      onProxyReq:(req)=> {
        console.log(req)
      },
      changeOrigin: true,
    })
  );
};