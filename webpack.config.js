const path = require('path');

const CopyWebpackPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    entry: "./bootstrap.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bootstrap.js",
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './index.html' },
            ],
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "."),
            outName: 'wasm_game_of_life',
        }),
    ],
    experiments: {
        syncWebAssembly: true,
    },
};
