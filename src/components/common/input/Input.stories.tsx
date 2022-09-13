import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const template: ComponentStory<typeof Input> = args => <Input {...args}/>;

export const NormalInput = template.bind({});
NormalInput.args = {
    width: '100px',
    height: '100px',
    buttonWidth: '10px',
    buttonHeight: '100%',
};