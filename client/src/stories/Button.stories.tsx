import { Meta, composeStory } from '@storybook/react'
import { Button, ButtonProps } from '../components/Button/Button'

export default {
	title: 'Example/Button',
	component: Button,
} as Meta<typeof Button>

const Template = (args: ButtonProps) => <Button {...args} />

export const Primary = composeStory(Template, {
	args: {
		label: 'Click Me!',
		onClick: () => alert('Button Clicked!'),
	},
})

export const Secondary = composeStory(Template, {
	args: {
		label: 'Click Me!',
		onClick: () => alert('Button Clicked!'),
	},
})
