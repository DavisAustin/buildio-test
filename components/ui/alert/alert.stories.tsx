import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle, Info } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/pro-solid-svg-icons';

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert/alert";
/**
 * Displays a callout for user attention.
 */
const meta = {
  title: "ui/Alert",
  component: Alert,
  tags: ["autodocs"],
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;
/**
 * The `default` form of the alert.
 */
export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Just a default alert</AlertTitle>
      <AlertDescription>
        Not very exciting.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * The `success` form of the alert.
 */
export const Success: Story = {
  render: (args) => (
    <Alert {...args}>
      <FontAwesomeIcon icon={faCircleCheck} className="size-4 text-fg-success" />
      <AlertTitle>Email sent!</AlertTitle>
      <AlertDescription>
        Your email has been sent.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * The `information` form of the alert.
 */
export const Information: Story = {
  render: (args) => (
    <Alert {...args}>
      <Info className="text-fg-info size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

/**
 * Use the `danger` alert to indicate a destructive action.
 */
export const Danger: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertCircle className="text-fg-danger size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};
