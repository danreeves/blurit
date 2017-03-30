// @flow
import React from 'react';
import styled from 'styled-components';

import Icon from './icon';
import HiddenFileInput from './hiddenfileinput';
import Label from './label';

const inputName = 'file-picker';

const Wrapper = styled.div`
    transition: filter .5s linear, opacity .5s linear;
    opacity: 1;
    ${props => {
        if (props.haveImage) {
            return `
                filter: blur(100px);
                opacity: 0;
                pointer-events: none;
            `;
        }
    }}
`;

type Props = {
    onChange: Function,
    haveImage: boolean,
};

function ImagePicker({ onChange, haveImage }: Props) {
    return (
        <Wrapper haveImage={haveImage} aria-hidden={haveImage}>
            <HiddenFileInput id={inputName} onChange={onChange} />
            <Label htmlFor={inputName}>
                <Icon />
                Choose an image
            </Label>
        </Wrapper>
    );
}

export default ImagePicker;
