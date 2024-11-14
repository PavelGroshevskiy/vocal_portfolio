import cn from "shared/lib/cn";
import * as cls from "./Sidebar.module.scss";
import { useState } from "react";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { AppLink, AppLinkTheme, Button } from "shared/ui";
import { t } from "i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            className={cn(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button onClick={onToggle}>{collapsed ? ">" : "<"}</Button>
            <div className={cls.links}>
                <AppLink
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                    to={"/"}
                >
                    {t("Главная страница")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    About
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
