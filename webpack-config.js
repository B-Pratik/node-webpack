const path = require('path');
const fs = require('fs');

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    output: {
        path: path.join(__dirname, "lib"),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    externals: fs.readdirSync("node_modules")
        .reduce(function (acc, mod) {
            if (mod === ".bin") {
                return acc
            }

            acc[mod] = "commonjs " + mod
            return acc
        }, {}),
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=es2017'],
                include: path.resolve('src'),
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                loaders: ['ts-loader'],
                include: path.resolve('src'),
                exclude: /node_modules/
            }
        ]
    }
};