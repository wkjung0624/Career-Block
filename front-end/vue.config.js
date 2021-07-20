module.exports = {

};

const target = 'http://127.0.0.1:3300';

module.exports = {
    lintOnSave: false,

    devServer: {
        port: 8081,
        proxy: {
            '^/api': {
                target,
                changeOrigin: true
            },
            '^/upload': {
                target,
                changeOrigin: true,
            },
            '^/download': {
                target,
                changeOrigin: true,
            }
        }
    }
}