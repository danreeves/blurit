/* @flow */
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

import Border from '../components/border';
import Slider from '../components/slider';
import ImagePicker from '../components/imagepicker';
import Controls from '../components/controls';
import Img from '../components/image';
import Reset from '../components/reset';

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
    imageData: ?string,
};

const defaultState: State = {
    blur: 5,
    imageData: undefined,
};

class App extends Component {
    state: State;
    updateBlur: (e: Event) => void;
    getImage: (e: Event) => void;
    reset: (e: Event) => void;

    constructor() {
        super();

        this.state = defaultState;

        this.updateBlur = this.updateBlur.bind(this);
        this.getImage = this.getImage.bind(this);
        this.reset = this.reset.bind(this);
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
        const imageData = new Image();
        imageData.onload = () => {
            this.setState(state => {
                return {
                    ...state,
                    imageData,
                };
            });
        };
        imageData.src = URL.createObjectURL(e.target.files[0]);
        e.target.value = ''; // Unset the file input
    }

    reset(e: SyntheticInputEvent) {
        this.setState(state => {
            return defaultState;
        });
    }

    render() {
        const { blur, imageData } = this.state;
        const haveImage = Boolean(imageData);
        const handleImagePicker = this.getImage;
        const handleUpdatingBlur = this.updateBlur;
        const reset = this.reset;
        return (
            <div id="innerapp">
                {haveImage ? <Img src={imageData} blur={blur} /> : undefined}
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
                        {imageData
                            ? <Reset onClick={reset} />
                            : undefined}
                    </Controls>
                </Border>
            </div>
        );
    }
}

export default App;
