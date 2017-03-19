import React from 'react';
import styled from 'styled-components';

const HiddenFileInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    &:focus + label {
        filter: blur(2.5px);
    }
`;

HiddenFileInput.defaultProps = {
    type: 'file',
    accept: 'image/*',
    multiple: false,
};

export default HiddenFileInput;
