import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button/icon-button";

/**
 * Displays a button or a component that looks like a button.
 */
const meta = {
  title: "ui/IconButton",
  component: IconButton,
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
    children: <Plus />,
  },
} satisfies Meta<typeof IconButton>;

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
 * Use the `secondary-accent` button to reduce emphasis on secondary actions, such as
 * canceling or dismissing a dialog.
 */
export const SecondaryAccent: Story = {
  args: {
    variant: "secondary-accent",
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
 * Use the `tertiary-accent` button to call for less emphasized actions, styled to
 * complement the primary button while being less conspicuous.
 */
export const TertiaryAccent: Story = {
  args: {
    variant: "tertiary-accent",
  },
};

/**
 * Use the `danger` button to indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

/**
 * Add the `disabled` prop to a button to prevent interactions and add a
 * loading indicator, such as a spinner, to signify an in-progress action.
 */
export const Loading: Story = {
  render: (args) => (
    <IconButton {...args}>
      <Plus />
    </IconButton>
  ),
  args: {
    ...Secondary.args,
    isLoading: true,
    disabled: true,
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
