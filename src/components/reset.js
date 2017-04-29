import React from 'react';
import styled from 'styled-components';
import { colour15 } from '../consts/theme';

const Button = styled.button`
    background: none;
    border: none;
    color: ${colour15};
    text-shadow: 0px 0px 2px #fff;
    margin: 0;
    font-size: 1em;
    padding: 1em;
    cursor: pointer;
`;

const Reset = ({ onClick }) => {
    return <Button onClick={onClick}>Cancel</Button>;
};

export default Reset;
