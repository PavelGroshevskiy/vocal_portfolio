const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProgressPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import pkg from "webpack";
// const { ProgressPlugin } = pkg;
// import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = (env) => {
    const PORT = env.port || 3000;
    const mode = env.mode || "development";
    const isDev = mode === "development";
    console.log(path.resolve(__dirname));
    return {
        mode: mode,
        entry: path.resolve(__dirname, "src", "js", "index.js"),

        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev
            ? {
                  static: "./dist",
                  open: true,
                  hot: true,
                  port: PORT,
                  liveReload: true,
              }
            : undefined,
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
            new ProgressPlugin(),
            new MiniCssExtractPlugin({
                linkType: "text/css",
                filename: "css/[name].[contenthash:8].css",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    use: "babel-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(sa|sc|c)ss$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                    ],
                },

                {
                    test: /\.png$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                mimetype: "image/png",
                            },
                        },
                    ],
                },
            ],
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
        },
    };
};
