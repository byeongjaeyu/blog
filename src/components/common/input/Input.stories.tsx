import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const template: ComponentStory<typeof Input> = args => <Input {...args}/>;

export const NormalSearch = template.bind({});
NormalSearch.args = {
    width: '200px',
    height: '60px',
    buttonWidth: '100px',
    buttonHeight: '20px',
    isSearchIcon: true,
};

export const NormalInput = template.bind({});
NormalInput.args = {
    width: '200px',
    height: '60px',
    buttonWidth: '100px',
    buttonHeight: '20px',
    isSearchIcon: false,
};