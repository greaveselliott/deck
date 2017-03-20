import React from 'react';

export default class IconCardText extends React.Component {

    render() {
        let style = {
            card:       {fill: '#e7eced'},
            card__text: {fill: '#afb6bb'}
        };

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={this.props.className}>
                <title>icons</title>
                <path style={style.card} d="M60.46 55.17H3.55A3.55 3.55 0 0 1 0 51.62V12.38a3.55 3.55 0 0 1 3.55-3.55h56.9A3.55 3.55 0 0 1 64 12.38v39.24a3.55 3.55 0 0 1-3.54 3.55zm0 0"/>
                <path style={style.card__text} d="M13 24.27h33a1.1 1.1 0 1 0 0-2.2H13a1.1 1.1 0 1 0 0 2.2zm37.16 0h1.1a1.1 1.1 0 1 0 0-2.2h-1.1a1.1 1.1 0 0 0 0 2.2zM14.1 40.83H13A1.1 1.1 0 0 0 13 43h1.1a1.1 1.1 0 0 0 0-2.21zm6.63 0h-2.21a1.1 1.1 0 0 0 0 2.21h2.21a1.1 1.1 0 0 0 0-2.21zm5.51 0h-1.1a1.1 1.1 0 0 0 0 2.21h1.1a1.1 1.1 0 1 0 0-2.21zm6.63 0h-2.21a1.1 1.1 0 1 0 0 2.21h2.21a1.1 1.1 0 0 0 0-2.21zm3.62.32a1.12 1.12 0 0 0 0 1.56 1.17 1.17 0 0 0 .79.32 1.11 1.11 0 1 0-.79-1.89zM13 30.9h38.28a1.1 1.1 0 1 0 0-2.21H13a1.1 1.1 0 1 0 0 2.21zm38.28 4.41H13a1.1 1.1 0 0 0 0 2.21h38.28a1.1 1.1 0 1 0 0-2.21zm0 0"/>
            </svg>
        )
    };
};