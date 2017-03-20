import React from 'react';

export default class IconNetwork extends React.Component {

    render() {
        let style = {
            circle__dash:   {fill: '#424a60'},
            circle__one:    {fill: '#ebba16'},
            circle__two:    {fill: '#7383bf'},
            circle__three:  {fill: '#43b05c'}
        };

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={this.props.className}>
                <path style={style.circle__dash} d="M47.28 9.93a1.12 1.12 0 0 0-1.18 1.91 26.79 26.79 0 0 1 12.85 23 27.09 27.09 0 0 1-.95 6.87 1.12 1.12 0 0 0 .79 1.37 1.07 1.07 0 0 0 .29 0 1.13 1.13 0 0 0 1.09-.83 29.32 29.32 0 0 0 1-7.48A29 29 0 0 0 47.28 9.93zM42.3 59.71A27 27 0 0 1 12.1 53a1.12 1.12 0 0 0-1.66 1.51 29.17 29.17 0 0 0 32.72 7.31 1.12 1.12 0 1 0-.86-2.07zM25.58 8.63a1.12 1.12 0 0 0-.53-2.18A29.06 29.06 0 0 0 2.89 32.72a1.12 1.12 0 0 0 1 1.2H4a1.12 1.12 0 0 0 1.12-1A26.83 26.83 0 0 1 25.58 8.63zm0 0"/>
                <path style={style.circle__one} d="M38.73 6.74A6.73 6.73 0 1 1 32 0a6.74 6.74 0 0 1 6.74 6.74zm0 0"/>
                <path style={style.circle__two} d="M14 48.28a6.74 6.74 0 1 1-6.7-6.74 6.74 6.74 0 0 1 6.7 6.74zm0 0"/>
                <path style={style.circle__three} d="M63.44 48.28a6.74 6.74 0 1 1-6.74-6.73 6.74 6.74 0 0 1 6.74 6.73zm0 0"/>
            </svg>
        )
    };
};