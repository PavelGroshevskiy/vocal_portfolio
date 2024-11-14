import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export default (options: BuildOptions): ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        alias: {},
        mainFiles: ["index"],
    };
};
