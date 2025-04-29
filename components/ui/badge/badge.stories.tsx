import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/ui/badge/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/pro-solid-svg-icons";

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta = {
  title: "ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
  args: {
    children: "Badge",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The `primary` form of the badge.
 */
export const Primary: Story = {};

/**
 * Use the `secondary` badge to call for less urgent information, blending
 * into the interface while still signaling minor updates or statuses.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

/**
 * Use the `emphasis` badge to  indicate emphasis and important information.
 */
export const Emphasis: Story = {
  args: {
    variant: "emphasis",
  },
};

/**
 * Use the `accent` badge to  indicate...
 */
export const Accent: Story = {
  args: {
    variant: "accent",
  },
};

/**
 * Use the `info` badge to  indicate information for the user.
 */
export const Info: Story = {
  args: {
    variant: "info",
  },
};

/**
 * Use the `new` badge to  indicate new features or updates.
 */
export const New: Story = {
  args: {
    variant: "new",
  },
};

/**
 * Use the `success` badge to  indicate success and confirmations.
 */
export const Success: Story = {
  args: {
    variant: "success",
  },
};

/**
 * Use the `attention` badge to  indicate attention and warnings.
 */
export const Attention: Story = {
  args: {
    variant: "attention",
  },
};

/**
 * Use the `danger` badge to  indicate danger and errors.
 */
export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

/**
 * Use the `sm` badge for high density interfaces.
 */
export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
  },
};

/**
 * Use the `lg` badge for low density interfaces.
 */
export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
};

/**
 * This is the badge with an icon.
 */
export const WithIcon: Story = {
  render: (args) => (
    <Badge {...args}>
      <FontAwesomeIcon icon={faArrowUp} />
      8%
    </Badge>
  ),
  args: {
    variant: "success",
    size: "sm"
  },
};
