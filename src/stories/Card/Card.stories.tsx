// components/Card/Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Card Content',
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Card',
    variant: 'outlined',
  },
};