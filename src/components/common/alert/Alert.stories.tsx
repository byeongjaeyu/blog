import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from './alert';

export default {
    title: 'Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const template: ComponentStory<typeof Alert> = args => <Alert {...args}/>;

export const alertWithCancel = template.bind({});
alertWithCancel.args = {
    title: 'test-alert',
    description: 'test-alert 테스트용',
    confirmText: '확인테스트',
    cancelText: '취소테스트',
    onClickConfirm: () => {
        alert('onClickConfirm!');
    },
    onClickCancel: () => {
        alert('onClickCancel!');
    }
};