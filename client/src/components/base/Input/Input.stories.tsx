import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta = {
    title: 'components/Input',
    component: Input,
    tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        text: 'Label',
        name: 'Input',
        placeholder: 'Default'
    }
}