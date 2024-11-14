import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Button theme={ButtonTheme.OUTLINE}>Outline</Button>
            <BugButton />

            {t("Главная страница")}
        </div>
    );
};

export default MainPage;
