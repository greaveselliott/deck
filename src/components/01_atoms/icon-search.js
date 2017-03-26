import React from 'react';

export default class IconCardText extends React.Component {

    render() {
        let style = {
            'cls-1': {
                fill: "none"
            },
            'cls-2': {
                "fill": "#57abc1"
            },
            'cls-3': {
                "clip-path": "url(#clip-path)"
            },
            'cls-4': {
                stroke: "#556080",
                "stroke-linecap":"round",
                "stroke-miterlimit":10,
                "stroke-width": "1.6px",
                fill: "none"
            },
            'cls-5': {
                fill: "#7ccbd8"
            },
            'cls-6': {
                fill: "#556080"
            },
        };

        return (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                    <style>
                        .cls-1,.cls-4{fill:none}
                        .cls-2{fill:#57abc1}
                        .cls-3{clip-path:url(#clip-path)}
                        .cls-4{stroke:#556080;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.6px}
                        .cls-5{fill:#7ccbd8}
                        .cls-6{fill:#556080}
                    </style>
                    <clipPath id="clip-path">
                        <path class="cls-1" d="M2.27 0h59.45v64H2.27z"/>
                    </clipPath>
                </defs>
                <title>icons</title>
                <path class="cls-2" d="M50.07 25.33A23.32 23.32 0 1 1 26.76 2a23.32 23.32 0 0 1 23.31 23.33zm0 0"/>
                <g class="cls-3">
                    <path class="cls-4" d="M42.44 42.58l18.12 18.85"/>
                </g>
                <path class="cls-5" d="M4.62 32.61a23.19 23.19 0 0 0 4.86 8.33l32.9-32.88A23.17 23.17 0 0 0 34 3.2zm0 0"/>
                <path class="cls-6" d="M26.76 49.81a24.48 24.48 0 1 1 24.48-24.48 24.51 24.51 0 0 1-24.48 24.48zm0-46.63A22.15 22.15 0 1 0 48.9 25.33 22.17 22.17 0 0 0 26.76 3.18zm0 0"/>
            </svg>
        )
    };
};