const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://greet.bg',
      changeOrigin: true,
      onProxyRes: function (proxyRes, req, res) {
        let body = '';
        proxyRes.on('data', function (chunk) {
          body += chunk;
        });
        proxyRes.on('end', function () {
          try {
            const modifiedBody = JSON.parse(body);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(modifiedBody));
          } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Error parsing JSON');
          }
        });
      },
    })
  );
};