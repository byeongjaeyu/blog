import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './button';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const template: ComponentStory<typeof Button> = args => <Button {...args}/>;

export const Primary = template.bind({});
Primary.args = {
    color: 'primary',
    children: 'test button',
    width: '100px',
    height: '50px',
};