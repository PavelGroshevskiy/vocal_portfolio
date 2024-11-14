import cn from "shared/lib/cn";
import { loader } from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return <div className={cn(loader, {}, [className])}></div>;
};
