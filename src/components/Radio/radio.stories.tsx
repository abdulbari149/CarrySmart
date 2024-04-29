import type { Meta } from '@storybook/react';

import setupComponentStories from 'storybook/utils/setup-component-stories';

import config from './radio.config';

import Radio from './Radio';

export default {
  component: Radio,
  title: 'Radio',
} as Meta<typeof Radio>;

export const { playground, variants } =
  setupComponentStories<typeof Radio>(config);
