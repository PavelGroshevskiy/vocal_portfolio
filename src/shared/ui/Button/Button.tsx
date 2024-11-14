import cn from "../../lib/cn";

// import cn from "shared/lib/cn";
import * as cls from "./Button.module.scss";

import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    OUTLINE = "outline",
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={cn(cls.button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
