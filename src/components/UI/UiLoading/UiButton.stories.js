import UiLoading from './UiLoading';

export default {
    title: 'UI Kit/UiLoading',
    component: UiLoading,
};

const props = {
    theme: 'white',
    isShadow: false,
    classes: '',
};

const Template = (args) => <UiLoading {...args} />;

export const Black = Template.bind({});

Black.args = {
    ...props,
    theme: 'black',
};

export const White = Template.bind({});

White.args = {
    ...props,
    theme: 'light',
    isShadow: true,
};
