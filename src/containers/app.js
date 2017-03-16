// @flow
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Border from '../components/border';
import Slider from '../components/slider';

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
    };
    updateBlur: (e: Event) => void;

    constructor() {
        super();

        this.state = {
            blur: 50,
        };

        this.updateBlur = this.updateBlur.bind(this);
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

    render() {
        const { blur } = this.state;
        return (
            <Border>
                <canvas />
                <input type="file" name="file" />
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
