import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonTheme } from "./Button";

const meta = {
    title: "shared/Button",
    component: Button,

    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Primary",
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: "Clear",
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: "Outline",
    },
};
