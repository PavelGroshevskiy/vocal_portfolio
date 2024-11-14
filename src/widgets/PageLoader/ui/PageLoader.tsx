import cn from "shared/lib/cn";
import { pageloader } from "./PageLoader.module.scss";
import { Loader } from "shared/ui";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={cn(pageloader, {}, [className])}>
            <Loader />
        </div>
    );
};
