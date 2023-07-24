import UiButton from './UiButton';

export default {
    title: 'UI Kit/UiButton',
    component: UiButton,
};

const Template = (args) => <UiButton {...args} />;
export const Dark = Template.bind({});

const props = {
    text: 'Hello',
    onClick: () => console.log('1'),
    disabled: false,
    theme: 'dark',
    classes: '',
};

Dark.args = {
    ...props,
    theme: 'dark',
};

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light',
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true,
};
