const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _root = path.resolve();
const _src = path.join(_root, '/src');
const _output = path.join(_root, '/dist');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['main', 'module', 'browser'],
    },
    context: _src,
    entry: './app.tsx',
    target: 'web',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ],
    },
    devServer: {
        contentBase: path.join(_output, 'renderer'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 4000,
        publicPath: '/',
    },
    output: {
        path: path.resolve(_output, 'renderer'),
        filename: '[hash].bundle.js',
        publicPath: './',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],
};