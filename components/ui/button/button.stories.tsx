import type { Meta, StoryObj } from "@storybook/react";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button/button";

/**
 * Displays a button or a component that looks like a button.
 */
const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "primary",
    size: "default",
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The `primary` form of the button, used for primary actions and commands.
 */
export const Primary: Story = {};

/**
 * Use the `secondary` button to reduce emphasis on secondary actions, such as
 * canceling or dismissing a dialog.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

/**
 * Use the `tertiary` button is minimalistic and subtle, for less intrusive
 * actions.
 */
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

/**
 * Use the `secondary-accent` button to reduce emphasis on secondary actions, such as
 * canceling or dismissing a dialog.
 */
export const SecondaryAccent: Story = {
  args: {
    variant: "secondary-accent",
  },
};

/**
 * Use the `tertiary-accent` button to call for less emphasized actions, styled to
 * complement the primary button while being less conspicuous.
 */
export const TertiaryAccent: Story = {
  args: {
    variant: "tertiary-accent",
  },
};

/**
 * Use the `primary-danger` button to indicate errors, alerts, or the need for
 * immediate attention.
 */
export const PrimaryDanger: Story = {
  args: {
    variant: "primary-danger",
  },
};

/**
 * Use the `secondary-danger` button to indicate...
 */
export const SecondaryDanger: Story = {
  args: {
    variant: "secondary-danger",
  },
};

/**
 * Use the `tertiary-danger` button to indicate...
 */
export const TertiaryDanger: Story = {
  args: {
    variant: "tertiary-danger",
  },
};

/**
 * Use the `link` button to reduce emphasis on tertiary actions, such as
 * hyperlink or navigation, providing a text-only interactive element.
 */
export const Link: Story = {
  args: {
    variant: "link",
  },
};

/**
 * Add the `disabled` prop to a button to prevent interactions and add a
 * loading indicator, such as a spinner, to signify an in-progress action.
 */
export const Loading: Story = {
  args: {
    ...Secondary.args,
    isLoading: true,
    disabled: true,
  },
};

/**
 * Add an icon element to a button to enhance visual communication and
 * providing additional context for the action.
 */
export const WithIcon: Story = {
  render: (args) => <Button {...args}>Login with Email Button</Button>,
  args: {
    ...Secondary.args,
    leadingVisual: <Mail />,
  },
};

/**
 * Use the `sm` size for a smaller button, suitable for interfaces needing
 * compact elements without sacrificing usability.
 */
export const Small: Story = {
  args: {
    size: "sm",
  },
};

/**
 * Add the `disabled` prop to prevent interactions with the button.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
