module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        proxy: {
            '/test': {
                target: 'http://www.imooc.com/u/',
                changeOrigin: false
            }
        },
    },
    configureWebpack: config => {
        config.devtool = "eval-source-map";
    }
}