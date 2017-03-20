import React from 'react';

export default class IconMultipleSwitches extends React.Component {

    render() {
        let style = {
            switch__one:      {fill: '#949493'},
            switch__two:      {fill: '#c7cac7'},
            switch__three:    {fill: '#e7eced'}
        };

        return (
            <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <title>icons</title>
                <path style={style.switch__one} d="M16 10.28h45.71a1.14 1.14 0 1 0 0-2.28H16a1.14 1.14 0 0 0 0 2.28zM48 56H2.29a1.14 1.14 0 0 0 0 2.29H48A1.14 1.14 0 1 0 48 56zm13.71-24H40a1.14 1.14 0 0 0 0 2.29h21.71a1.14 1.14 0 1 0 0-2.29zM2.29 34.28h22.86a1.14 1.14 0 1 0 0-2.29H2.29a1.14 1.14 0 0 0 0 2.29zm0 0"/>
                <path style={style.switch__two} d="M16 9.14a6.85 6.85 0 1 1-6.85-6.85A6.85 6.85 0 0 1 16 9.14zm23.33 23.77a7.09 7.09 0 1 1-7.09-7.09 7.09 7.09 0 0 1 7.09 7.09zm22.38 24.23a6.85 6.85 0 1 1-6.85-6.86 6.86 6.86 0 0 1 6.85 6.86zm0 0"/>
                <path style={style.switch__three} d="M16 6.86A6.85 6.85 0 1 1 9.15 0 6.86 6.86 0 0 1 16 6.86zm23.33 23.76a7.09 7.09 0 1 1-7.09-7.09 7.09 7.09 0 0 1 7.09 7.09zm22.38 24.23A6.85 6.85 0 1 1 54.86 48a6.85 6.85 0 0 1 6.85 6.85zm0 0"/>
            </svg>
        )
    };
};