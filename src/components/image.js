import styled from 'styled-components';
import React, { Component } from 'react';
import StackBlur from 'stackblur-canvas';

const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
`;

type Props = {
    src: HTMLImageElement,
    blur: number,
};

function doBlur(canvas, image, blur) {
    const context = canvas.getContext('2d');
    const iw = image.naturalWidth;
    const ih = image.naturalHeight;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    const wdiff = Math.abs(iw - cw);
    const hdiff = Math.abs(ih - ch);

    let dw = cw;
    let dh = ch;

    if (wdiff > hdiff) {
        dh = ch;
        dw = iw * (dh / ih);
    } else {
        dw = cw;
        dh = ih * (dw / iw);
    }

    const dx = dw < cw ? cw / 2 - dw / 2 : 0 - dw / 2 + cw / 2;
    const dy = dh < ch ? ch / 2 - dh / 2 : 0 - dh / 2 + ch / 2;

    context.drawImage(image, dx, dy, dw, dh);

    StackBlur.canvasRGBA(canvas, 0, 0, cw, ch, blur);
}

class Img extends Component {
    constructor(props: Props) {
        super(props);
        this.getContext = this.getContext.bind(this);
    }

    getContext(canvas) {
        if (canvas) {
            this.canvas = canvas;
            this.props.getCanvas(canvas); // Pass the canvas up to parent state
            doBlur(this.canvas, this.props.src, this.props.blur);
        }
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.blur !== nextProps.blur) {
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        if (this.canvas) {
            doBlur(this.canvas, this.props.src, this.props.blur);
        }
    }

    componentWillUnmount() {
        this.canvas = false;
    }

    render() {
        return (
            <Canvas
                innerRef={this.getContext}
                width={window.innerWidth}
                height={window.innerHeight}
            />
        );
    }
}

export default Img;
