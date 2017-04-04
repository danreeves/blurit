import styled from 'styled-components';
import {
    colour1 as gradientStart,
    colour2 as gradientEnd,
} from '../consts/theme';

const thumbSize = 46;
const thumbBorder = 2;
const trackHeight = 10;
const trackBorder = 2;
const thumbOffset = 0 - thumbSize / 2 + trackHeight / 2 - trackBorder;

const Slider = styled.input`

    transition: filter .5s linear, opacity .5s linear;
    opacity: 1;
    ${props => {
        if (!props.haveImage) {
            return `
                filter: blur(20px);
                opacity: 0;
                pointer-events: none;
            `;
        }
    }}

    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    background: transparent; /* Otherwise white in Chrome */

    display: block;
    position: absolute;
    margin: 0;
    padding: 0;

    bottom: ${thumbSize}px;
    left: 50%;
    transform: translateX(-50%);

    width: calc(95%);

    &:focus {
        outline: none;
    }

    &::-webkit-slider-thumb {
        margin-top: ${thumbOffset}px;
        -webkit-appearance: none;
        height: ${thumbSize}px;
        width: ${thumbSize}px;
        background: transparent;
        border: ${thumbBorder}px solid #3acfd5;
        cursor: pointer;
        border-image: linear-gradient(to bottom right, ${gradientStart} 0%, ${gradientEnd} 100%);
        border-image-slice: 1;
        transition: filter .25s;
        filter: blur(2.5px);
    }


    &:focus::-webkit-slider-thumb,
    &:active::-webkit-slider-thumb,
    &:hover::-webkit-slider-thumb {
        filter: blur(0);
    }


    &::-moz-range-thumb {
        margin-top: ${thumbOffset}px;
        -webkit-appearance: none;
        height: ${thumbSize}px;
        width: ${thumbSize}px;
        background: transparent;
        border: ${thumbBorder}px solid #3acfd5;
        cursor: pointer;
        border-image: linear-gradient(to bottom right, ${gradientStart} 0%, ${gradientEnd} 100%);
        border-image-slice: 1;
    }
    &::-ms-thumb {
        margin-top: ${thumbOffset}px;
        -webkit-appearance: none;
        height: ${thumbSize}px;
        width: ${thumbSize}px;
        background: transparent;
        border: ${thumbBorder}px solid #3acfd5;
        cursor: pointer;
        border-image: linear-gradient(to bottom right, ${gradientStart} 0%, ${gradientEnd} 100%);
        border-image-slice: 1;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: ${trackHeight}px;
        cursor: pointer;
        background: transparent;
        border: ${trackBorder}px solid #3acfd5;
        border-image: linear-gradient(to bottom right, ${gradientStart} 0%, ${gradientEnd} 100%);
        border-image-slice: 1;

        transition: filter .25s;
        filter: blur(2.5px);
    }

    &:focus::-webkit-slider-runnable-track,
    &:active::-webkit-slider-runnable-track,
    &:hover::-webkit-slider-runnable-track {
        filter: blur(0);
    }

    &::-moz-range-track {
        width: 100%;
        height: ${trackHeight}px;
        cursor: pointer;
        background: transparent;
        border: ${trackBorder}px solid #3acfd5;
        border-image: linear-gradient(to bottom right, ${gradientStart} 0%, ${gradientEnd} 100%);
        border-image-slice: 1;
    }
    &::-ms-track {
        width: 100%;
        height: ${trackHeight}px;
        cursor: pointer;
        background: transparent;
        border: ${trackBorder}px solid #3acfd5;
        border-image: linear-gradient(to bottom right, ${gradientStart} 0%, ${gradientEnd} 100%);
        border-image-slice: 1;
    }
`;

export default Slider;
