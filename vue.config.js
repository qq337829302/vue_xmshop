module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: 'http://mi.futurefe.com/api',
                changeOrigin: false
            }
        },
    },
    configureWebpack: config => {
        config.devtool = "eval-source-map";
    }
}