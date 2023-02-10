const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

module.exports = function(app) {
    app.use(
        '/adobe',
        createProxyMiddleware({
            target: 'http://localhost:4502',
            changeOrigin: true,
        })
    );

    app.use(morgan('combined'));
};