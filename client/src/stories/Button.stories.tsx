import { composeStory, Meta } from '@storybook/react'
import Button from '../components/Button/Button'
import { ButtonProps } from '../components/Button/Button.props'

export default {
	title: 'Example/Button',
	component: Button,
	args: {
		children: 'Button',
		isLoading: false,
		appearance: 'default',
	},
	argTypes: {
		appearance: {
			options: ['default', 'accent'],
			control: { type: 'select' },
		},
		isLoading: {
			control: 'boolean',
		},
	},
} as Meta<typeof Button>

// TODO: Сделать обертку

const Template = (args: ButtonProps) => (
	<div style={{ width: '200px' }}>
		<Button {...args}>{args.children}</Button>
	</div>
)

export const Changable = composeStory(Template, {})
