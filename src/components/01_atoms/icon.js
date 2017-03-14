import React from 'react';

export default class Icon extends React.Component {



    render() {
        return (
            <img src={this._get_icon(this.props.icon)} className="icon"/>
        )
    };

    _get_icon (icon_name) {
        let icon;

        switch (icon_name) {

        }

        return icon;
    }
};