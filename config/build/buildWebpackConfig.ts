import webpack from "webpack";
import { BuildOptions } from "./types/config";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolves from "./buildResolves";
import buildDevServer from "./buildDevServer";

export default (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ? "inline-source-map" : undefined,

        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
