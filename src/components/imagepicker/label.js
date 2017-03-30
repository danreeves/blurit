import styled from 'styled-components';
import { colour1, colour2 } from '../../consts/theme';

const Label = styled.label`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-family: Futura, Trebuchet MS, Arial, sans-serif;
    color: ${colour2};
    cursor: pointer;
    text-align: center;

    transition: filter .25s;
    &:hover,
    &:active,
    &:focus {
        filter: blur(2.5px);
    }
    & > svg {
        width: 40%;
        display: block;
        margin: auto;
        transform: translateX(7.5%);
    }
`;

export default Label;
