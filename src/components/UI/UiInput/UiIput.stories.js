import { useState } from 'react';
import UiInput from './UiInput';

export default {
    title: 'UI Kit/UiInput',
    component: UiInput,
};

const Template = (arg) => {
    const [value, setValue] = useState('');

    const handleChangeInput = (value) => {
        setValue(value);
    };

    return (
        <UiInput
            {...arg}
            value={value}
            onChange={handleChangeInput}
        />
    );
};

const props = {
    value: '',
    handleInputChange: () => console.log('changed'),
    placeholder: 'placeholder',
    classes: '',
};

export const Default = Template.bind({});
Default.args = {
    ...props,
};
