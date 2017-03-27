import React from 'react';

export default class IconSearch extends React.Component {

    render() {
        let style = {
            search__mask: {
                fill: "none"
            },
            search__glass: {
                fill: "#57abc1"
            },
            search__clipping_path: {
                clipPath: "url(#clip-path)"
            },
            search__frame: {
                stroke: "#556080",
                strokeLinecap:"round",
                strokeMiterlimit:10,
                strokeWidth: "1.6px",
                fill: "none"
            },
            search__glass_reflection: {
                fill: "#7ccbd8"
            },
            search__handle: {
                fill: "#556080"
            },
        };

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={this.props.className}>
                <defs>
                    <clipPath id="clip-path">
                        <path style={style.search__mask} d="M2.27 0h59.45v64H2.27z"/>
                    </clipPath>
                </defs>
                <title>icons</title>
                <path style={style.search__glass} d="M50.07 25.33A23.32 23.32 0 1 1 26.76 2a23.32 23.32 0 0 1 23.31 23.33zm0 0"/>
                <g style={style.search__clipping_path}>
                    <path style={style.search__frame} d="M42.44 42.58l18.12 18.85"/>
                </g>
                <path style={style.search__glass_reflection} d="M4.62 32.61a23.19 23.19 0 0 0 4.86 8.33l32.9-32.88A23.17 23.17 0 0 0 34 3.2zm0 0"/>
                <path style={style.search__handle} d="M26.76 49.81a24.48 24.48 0 1 1 24.48-24.48 24.51 24.51 0 0 1-24.48 24.48zm0-46.63A22.15 22.15 0 1 0 48.9 25.33 22.17 22.17 0 0 0 26.76 3.18zm0 0"/>
            </svg>
        )
    };
};