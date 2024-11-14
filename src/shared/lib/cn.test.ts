import cn from "./cn";

describe("classNames", () => {
    test("with only first param", () => {
        expect(cn("someClass", {}, [])).toBe("someClass");
    });
    test("with additional class", () => {
        const expected = "someClass class1 class2";
        expect(cn("someClass", {}, ["class1", "class2"])).toBe(expected);
    });
    test("with mods class", () => {
        const expected = "someClass class1 class2 hovered scrollable";
        expect(
            cn("someClass", { hovered: true, scrollable: true }, [
                "class1",
                "class2",
            ]),
        ).toBe(expected);
    });
    test("with mods class one false", () => {
        const expected = "someClass class1 class2 hovered";
        expect(
            cn("someClass", { hovered: true, scrollable: false }, [
                "class1",
                "class2",
            ]),
        ).toBe(expected);
    });
    test("with mods class one undefined", () => {
        const expected = "someClass class1 class2 scrollable";
        expect(
            cn("someClass", { hovered: undefined, scrollable: true }, [
                "class1",
                "class2",
            ]),
        ).toBe(expected);
    });
});
