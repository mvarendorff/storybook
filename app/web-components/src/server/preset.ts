import type { StorybookConfig } from '@storybook/core-common';

export const addons: StorybookConfig['addons'] = [
  require.resolve('./framework-preset-web-components'),
  require.resolve('./framework-preset-web-components-docs'),
];
