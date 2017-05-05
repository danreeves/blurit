/* @flow */
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import download from 'downloadjs';

import Border from '../components/border';
import Slider from '../components/slider';
import ImagePicker from '../components/imagepicker';
import Controls from '../components/controls';
import Img from '../components/image';
import Button from '../components/button';

/* eslint-disable no-unused-expressions */
injectGlobal`
    * {
        box-sizing: border-box;
    }
    html, body, #app, #innerapp {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
`;
/* eslint-enable */

type State = {
    blur: number,
    originalImage: ?string,
    canvas: ?HTMLCanvasElement,
};

const defaultState: State = {
    blur: 5,
    originalImage: undefined,
    canvas: undefined,
};

class App extends Component {
    state: State;
    updateBlur: (e: Event) => void;
    getImage: (e: Event) => void;
    reset: (e: Event) => void;
    download: (e: Event) => void;
    getCanvas: (canvas: HTMLCanvasElement) => void;

    constructor() {
        super();

        this.state = defaultState;

        this.updateBlur = this.updateBlur.bind(this);
        this.getImage = this.getImage.bind(this);
        this.reset = this.reset.bind(this);
        this.download = this.download.bind(this);
        this.getCanvas = this.getCanvas.bind(this);
    }

    updateBlur(e: Event): void {
        if (e.target instanceof HTMLInputElement) {
            const blur = e.target.value;
            this.setState(state => {
                return {
                    ...state,
                    blur,
                };
            });
        }
    }

    getImage(e: SyntheticInputEvent) {
        const originalImage = new Image();
        originalImage.onload = () => {
            this.setState(state => {
                return {
                    ...state,
                    originalImage,
                };
            });
        };
        originalImage.src = URL.createObjectURL(e.target.files[0]);
        e.target.value = ''; // Unset the file input
    }

    reset(e: SyntheticInputEvent) {
        this.setState(state => {
            return defaultState;
        });
    }

    getCanvas(canvas: HTMLCanvasElement) {
        this.setState(state => ({
            ...state,
            canvas,
        }));
    }

    download(e: SyntheticInputEvent) {
        if (this.state.canvas instanceof HTMLCanvasElement) {
            download(this.state.canvas.toDataURL(), 'blurred.png', 'image/png');
        } else {
            console.log("Error, we don't have a canvas element");
        }
    }

    render() {
        const { blur, originalImage } = this.state;
        const haveImage = Boolean(originalImage);
        const handleImagePicker = this.getImage;
        const handleUpdatingBlur = this.updateBlur;
        const reset = this.reset;
        const download = this.download;
        const getCanvas = this.getCanvas;
        return (
            <div id="innerapp">
                {haveImage
                    ? <Img
                          src={originalImage}
                          blur={blur}
                          getCanvas={getCanvas}
                      />
                    : undefined}
                <Border>
                    <ImagePicker
                        haveImage={haveImage}
                        onChange={handleImagePicker}
                    />
                    <Controls>
                        <Slider
                            type="range"
                            min="0"
                            max="50"
                            step="1"
                            value={blur}
                            blur={blur}
                            haveImage={haveImage}
                            aria-hidden={!haveImage}
                            onChange={handleUpdatingBlur}
                        />
                        {originalImage
                            ? [
                                  <Button key="cancel-button" onClick={reset}>
                                      Cancel
                                  </Button>,
                                  <Button key="save-button" onClick={download}>
                                      Save
                                  </Button>,
                              ]
                            : undefined}
                    </Controls>
                </Border>
            </div>
        );
    }
}

export default App;
