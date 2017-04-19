import React from 'react';

export default class Image extends React.Component {

    constructor() {
        super();

        this.state = {
            loaded: false,
            loading: false,
            modifier: "",
            media_query: "",
            src: null,
            alt: null
        }
    }

    render() {
        return (
            <figure className={"a-image--crop" + this.state.modifier}>
                <img className={"a-image"} src={this.state.src} alt={this.props.alt} width={this.state.width} height={this.state.height}/>
            </figure>
        )
    };

    componentDidMount() {
        this.setState({
            src: this.props.src,
            alt: this.props.alt
        })
    }
};