type Mode = Record<string, boolean | string>;

export default (cls: string, mods?: Mode, additional?: string[]) => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key),
    ].join(" ");
};
