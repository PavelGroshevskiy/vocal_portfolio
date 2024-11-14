import cn from "shared/lib/cn";
import { pageerror } from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        location.reload();
    };

    return (
        <div className={cn(pageerror, {}, [className])}>
            {t("Произошла непредвиденная ошибка")}
            <Button onClick={reload} theme={ButtonTheme.OUTLINE}>
                {t("Обновить страницу")}
            </Button>
        </div>
    );
};
