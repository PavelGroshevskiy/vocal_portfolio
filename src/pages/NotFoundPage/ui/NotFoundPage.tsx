import cn from "shared/lib/cn";
import { notfoundpage } from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(notfoundpage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    );
};
