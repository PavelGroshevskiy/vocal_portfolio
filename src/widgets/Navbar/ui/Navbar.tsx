import cn from "shared/lib/cn";
import { navbar, links, mainLink } from "./Navbar.module.scss";

import { AppLink, AppLinkTheme } from "shared/ui";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(navbar, {}, [className])}>
            <p>Pavel</p>
        </div>
    );
};
