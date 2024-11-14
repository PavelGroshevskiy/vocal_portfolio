import cn from "shared/lib/cn";
import { applink, primary, secondary } from "./AppLink.module.scss";
import { FC, ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = primary,
    SECONDARY = secondary,
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
}) => {
    return (
        <Link to={to} className={cn(applink, { [theme]: true }, [className])}>
            {children}
        </Link>
    );
};
