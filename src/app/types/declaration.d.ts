declare module "*.module.css";
declare module "*.module.scss";

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module "*.png";

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.woff";
declare module "*.woff2";

declare const __IS_DEV__: boolean;
