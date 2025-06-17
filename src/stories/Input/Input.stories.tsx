// components/Input/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
  },
};