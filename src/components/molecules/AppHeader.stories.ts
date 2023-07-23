import type { Meta, StoryObj } from '@storybook/react';

import AppHeader from './AppHeader';

const meta = {
  title: 'molecules/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    position: 'fixed',
  },
};
