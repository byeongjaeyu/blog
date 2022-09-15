import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './modal';

export default {
    title: 'Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const template: ComponentStory<typeof Modal> = args => <Modal {...args}/>;

export const NormalModal = template.bind({});
NormalModal.args = {
  title: "modal-test",
  description: "이것은 모달 테스트입니다. 모달 테스트하면 안됩니까? 모달 테스트좀 해볼게요",
};
