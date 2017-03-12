import React from 'react';

export default class Hyperlink extends React.Component {
    
    render() {
        return (
            <a href={this.props.href} title={this.props.title} className={this.props.class}>{this.props.text}</a>
        )
    };

};