import styled, { keyframes } from 'styled-components';

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
    margin: 5px;
    border: 5px solid transparent;
    border-image: linear-gradient(to bottom right, #3acfd5 0%, #3a4ed5 100%);
    border-image-slice: 1;
    animation: ${unblur} 1s ease-out running;
`;

export default Border;
