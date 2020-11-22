const path = require('path');

module.exports = {
    mode: 'development',
    entry: './resources/js/app.jsx',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.js|\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-react-jsx']
                }
            }
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        } ]
    }
};