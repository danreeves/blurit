import styled, { keyframes } from 'styled-components';
import { colour1, colour2 } from '../consts/theme';

const unblur = keyframes`
    from {
        filter: blur(100px);
    }
    to {
        transform: rotate(0px);
    }
`;

const Border = styled.div`
    will-change: filter;
    position: relative;
    width:  calc(100% - 10px);
    height: calc(100% - 10px);
    @media (min-width: 500px) {
    }
    margin: 5px;
    border: 5px solid transparent;
    border-image: linear-gradient(to bottom right, ${colour1} 0%, ${colour2} 100%);
    border-image-slice: 1;
    animation: ${unblur} 1.5s ease-out running;
`;

export default Border;
