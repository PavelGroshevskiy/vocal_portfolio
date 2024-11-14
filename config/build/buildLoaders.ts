import webpack from "webpack";
import { BuildOptions } from "./types/config";
import buildCssLoaders from "./loaders/buildCssLoaders";

export default ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2?)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const scssLoaders = buildCssLoaders(isDev);

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoaders];
};
