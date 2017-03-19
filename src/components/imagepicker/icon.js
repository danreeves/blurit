import React from 'react';
import { colour1, colour2 } from '../../consts/theme';

const Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <defs>
            <linearGradient id="gradient" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor={colour1} />
                <stop offset="100%" stopColor={colour2} />
            </linearGradient>
        </defs>
        <path
            d="M28 6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h18v-4H4l6-10.3 6 5.8 4-3.7 1.7 3.5H28zm-10 7.3a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm8.6 8l-4.6 5h3V29h3v-2.7h3l-4.4-5"
            fill="url(#gradient)"
        />
    </svg>
);

export default Icon;
