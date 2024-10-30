import { Meta, StoryFn } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button.props'

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button',
        isLoading: false,
        appearance: 'default'
    },
    argTypes: {
        appearance: {
            options: ['default', 'accent'],
            control: { type: 'select' }
        },
        isLoading: {
            control: 'boolean'
        }
    },
    decorators: [
        StoryFn => (
            <div style={{ maxWidth: '256px' }}>
                <StoryFn />
            </div>
        )
    ]
} as Meta<typeof Button>

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    appearance: 'default'
}

export const Accent = Template.bind({})
Accent.args = {
    appearance: 'accent'
}
