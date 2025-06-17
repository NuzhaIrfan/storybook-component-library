// components/Avatar/Avatar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  args: {
    size: 'sm',
    src: 'https://i.pravatar.cc/150?img=1',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    src: 'https://i.pravatar.cc/300?img=3',
  },
};