import type { Meta, StoryObj } from '@storybook/react';

import AppLayout from './AppLayout';

const meta = {
  title: 'organisms/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>test</div>,
  },
};
