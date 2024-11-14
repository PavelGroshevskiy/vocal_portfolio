import cn from "shared/lib/cn";
import { langswitcher } from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            className={cn(langswitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={onToggle}
        >
            {t("Язык")}
        </Button>
    );
};
