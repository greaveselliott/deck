import React from 'react';

export default class Image extends React.Component {

    constructor() {
        super();

        this.state = {
            loaded: false,
            loading: false,
            width: 0,
            height: 0,
            modifier: "",
            media_query: "",
            src: this.props.src,
            alt: this.props.alt
        }
    }

    render() {
        return (
            <img className={this.props.className + this.state.modifier} src={this.state.src} alt={this.props.alt} width={this.state.width} height={this.state.height}/>
        )
    };
};