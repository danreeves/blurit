// @flow
import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

import Border from '../components/border';
import Slider from '../components/slider';
import ImagePicker from '../components/imagepicker';
import Img from '../components/image';

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

class App extends Component {
    state: {
        blur: number,
        imageData: ?string,
    };
    updateBlur: (e: Event) => void;
    getImage: (e: Event) => void;

    constructor() {
        super();

        this.state = {
            blur: 5,
            imageData: undefined,
        };

        this.updateBlur = this.updateBlur.bind(this);
        this.getImage = this.getImage.bind(this);
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
    }

    render() {
        const { blur, imageData } = this.state;
        const haveImage = Boolean(imageData);
        const handleImagePicker = this.getImage;
        const handleUpdatingBlur = this.updateBlur;
        return (
            <div id="innerapp">
                {imageData ? <Img src={imageData} blur={blur} /> : undefined}
                <Border>
                    <ImagePicker
                        haveImage={haveImage}
                        onChange={handleImagePicker}
                    />
                    <Slider
                        type="range"
                        min="0"
                        max="50"
                        step="1"
                        defaultValue={blur}
                        blur={blur}
                        haveImage={haveImage}
                        aria-hidden={!haveImage}
                        onChange={handleUpdatingBlur}
                    />
                </Border>
            </div>
        );
    }
}

export default App;
