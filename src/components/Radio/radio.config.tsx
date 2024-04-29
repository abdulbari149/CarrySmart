import type { ComponentConfig } from 'storybook/utils/component-config';

import Radio from './Radio';

export default {
  argTypes: {
    selected: {
      control: {
        options: [true, false],
        type: 'select',
      },
    },
  },
  component: Radio,
  props: {
    ur: {
      selected: false,
    },
    en: {
      selected: true,
      style: {
        marginBottom: 10,
      },
    },
  },
  title: 'Radio',
} satisfies ComponentConfig<typeof Radio>;
