import type { Meta, StoryObj } from '@storybook/react';

import AppSideMenu from './AppSideMenu';

const meta = {
  title: 'molecules/AppSideMenu',
  component: AppSideMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof AppSideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
