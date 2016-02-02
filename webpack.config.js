var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: getEntries(['./src/js/index.js']),
    output: {
        path: './dist',
        filename: 'all.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: getJsLoaders(),
                include: /src/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?limit=8000!img'
            },
            {
                test: /\.wav$/,
                loader: 'file'
            }
        ]
    },
    plugins: getPlugins([
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ])
}

function getEntries(entries) {
    if(process.env.NODE_ENV !== 'production') {
        entries.push('webpack-dev-server/client?http://localhost:8000')
        entries.push('webpack/hot/only-dev-server')
    }
    return entries
}

function getPlugins(plugins) {
    if(process.env.NODE_ENV !== 'production') {
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }
    return plugins;
}

function getJsLoaders() {
    if(process.env.NODE_ENV !== 'production') {
        return ['react-hot', 'babel']
    }
    return ['babel'];
}
