// @flow
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Border from '../components/border';
import Slider from '../components/slider';
import ImagePicker from '../components/imagepicker';

injectGlobal`
    * {
        box-sizing: border-box;
    }
    html, body, #app {
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
            blur: 50,
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
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            const imageData = e.target.result;
            this.setState(state => {
                return {
                    ...state,
                    imageData,
                };
            });
        };
        reader.readAsDataURL(file);
    }

    render() {
        const { blur, imageData } = this.state;
        return (
            <Border>
                <ImagePicker onChange={this.getImage} />
                {(imageData) ? <img src={imageData} /> : undefined}
                <Slider
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    defaultValue={blur}
                    onChange={this.updateBlur}
                    blur={blur}
                />
            </Border>
        );
    }
}

export default App;
