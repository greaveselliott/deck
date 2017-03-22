import React from 'react';

export default class IconProfile extends React.Component {

    render() {
        let style = {
            profile__clipping_path:     {fill: 'none'},
            profile__clipping_mask:     {'clip-path': 'url(#clip-path)'},
            profile__background:        {fill: '#e7eced'},
            profile__man:               {fill: '#556080'}
        };

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                    <clipPath id="clip-path"><path style={style.profile__clipping_path} d="M.7 0h62.6v64H.7z"/></clipPath>
                </defs>
                <g style={style.profile__clipping_mask}>
                    <path style={style.profile__background} d="M22.4 49.26l-9.22 5a8.45 8.45 0 0 0-1.48 1.05 30.87 30.87 0 0 0 39.66.1 8.18 8.18 0 0 0-1.62-1.09l-9.87-4.93A3.77 3.77 0 0 1 37.79 46v-3.82a13.64 13.64 0 0 0 .93-1.2 22.63 22.63 0 0 0 3.07-6.18A3.1 3.1 0 0 0 44 31.84v-4.13a3.08 3.08 0 0 0-1-2.29v-6s1.23-9.3-11.37-9.3-11.36 9.3-11.36 9.3v6a3.08 3.08 0 0 0-1 2.29v4.13a3.11 3.11 0 0 0 1.43 2.6 20.53 20.53 0 0 0 3.74 7.73V46a3.77 3.77 0 0 1-2 3.3zm0 0"/>
                    <path style={style.profile__man} d="M32.12.82a30.87 30.87 0 0 0-20.41 54.5 8.81 8.81 0 0 1 1.46-1l9.22-5a3.76 3.76 0 0 0 2-3.31v-3.83a20.53 20.53 0 0 1-3.73-7.74 3.08 3.08 0 0 1-1.43-2.6v-4.13a3.1 3.1 0 0 1 1-2.29v-6s-1.22-9.3 11.37-9.3S43 19.44 43 19.44v6a3.09 3.09 0 0 1 1 2.29v4.14a3.1 3.1 0 0 1-2.2 2.95A22.8 22.8 0 0 1 38.72 41c-.34.48-.65.88-.93 1.2V46a3.76 3.76 0 0 0 2.08 3.37l9.88 4.93a8.06 8.06 0 0 1 1.62 1.08A30.88 30.88 0 0 0 32.12.82zm0 0"/>
                </g>
            </svg>
        )
    };
};