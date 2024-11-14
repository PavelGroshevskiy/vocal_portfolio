import cn from "shared/lib/cn";
import * as cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import DarkTheme from "shared/assets/icons/theme-dark.svg";
import LightTheme from "shared/assets/icons/theme-light.svg";
import { Theme } from "shared/config/theme/ThemeContext";
import { Button, ButtonTheme } from "shared/ui";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={cn(cls, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
        </Button>
    );
};
