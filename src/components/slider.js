import styled from 'styled-components';

const thumbSize = 46;
const thumbBorder = 2;
const trackHeight = 10;
const trackBorder = 2;
const thumbOffset = 0 - (thumbSize / 2) + (trackHeight / 2) - trackBorder;

const gradientStart = '#3acfd5';
const gradientEnd = '#3a4ed5';

const Slider = styled.input`
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
        outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    &::-webkit-slider-thumb {
        margin-top: ${thumbOffset}px;
        -webkit-appearance: none;
        height: ${thumbSize}px;
        width: ${thumbSize}px;
        border-radius: ${thumbSize}px;
        background: transparent;
        border: ${thumbBorder}px solid #3acfd5;
        cursor: pointer;
        border-image: linear-gradient(to bottom right, ${gradientStart} 0%, ${gradientEnd} 100%);
        border-image-slice: 1;
    }
    &::-moz-range-thumb {
        margin-top: ${thumbOffset}px;
        -webkit-appearance: none;
        height: ${thumbSize}px;
        width: ${thumbSize}px;
        border-radius: ${thumbSize}px;
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
        border-radius: ${thumbSize}px;
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
