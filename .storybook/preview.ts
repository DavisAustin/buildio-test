import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../app/globals.css'

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--color-bg-default)' },
      ],
    }
  },
};

export default preview;