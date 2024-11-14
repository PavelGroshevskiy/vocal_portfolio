import cn from "shared/lib/cn";

import { Button, ButtonTheme } from "shared/ui";
import { useEffect, useState } from "react";

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const throwErr = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            onClick={throwErr}
            theme={ButtonTheme.CLEAR}
            className={cn("cls", {}, [className])}
        >
            throw Error
        </Button>
    );
};
