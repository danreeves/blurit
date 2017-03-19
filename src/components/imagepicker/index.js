// @flow
import React from 'react';
import styled from 'styled-components';

import Icon from './icon';
import HiddenFileInput from './hiddenfileinput';
import Label from './label';

const inputName = 'file-picker';

type Props = {
    onChange: Function,
};

function ImagePicker({ onChange }: Props) {
    return (
        <div>
            <HiddenFileInput id={inputName} onChange={onChange} />
            <Label htmlFor={inputName}>
                <Icon />
                Choose an image
            </Label>
        </div>
    );
}

export default ImagePicker;
