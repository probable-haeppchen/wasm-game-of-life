const path = require('path');

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./index.js",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './index.html' },
            ],
        }),
    ],
    experiments: {
        asyncWebAssembly: true,
    },
};
