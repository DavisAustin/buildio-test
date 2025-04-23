import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/avatar";

/**
 * An image element with a fallback for representing the user.
 */
const meta = {
  title: "ui/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    layout: "centered",
  },
  args: {
    size: "default",
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The `xs` form of the avatar.
 */
export const ExtraSmallAvatar: Story = {
  args: {
    size: "xs",
  },
};

/**
 * The 'sm' form of the avatar.
 */
export const SmallAvatar: Story = {
  args: {
    size: "sm",
  },
};

/**
 * The 'default' form of the avatar.
 */
export const DefaultAvatar: Story = {
  args: {
    size: "default",
  },
};

/**
 * The 'lg' form of the avatar.
 */
export const LargeAvatar: Story = {
  args: {
    size: "lg",
  },
};

/**
 * The 'xl' form of the avatar.
 */
export const ExtraLargeAvatar: Story = {
  args: {
    size: "xl",
  },
};
