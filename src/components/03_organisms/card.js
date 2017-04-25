import React from "react";
import Image from "../01_atoms/image";

export default class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            guid: null,
            name: null,
            image: null,
            content: null,
            modifier: "--loading"
        }

        this._toggle_loading = this._toggle_loading.bind(this);
    }

    render () {



        return (
            <article className={"o-card" + this.state.modifier} onClick={this._toggle_loading}>
                <h3 className={"o-card__name" + this.state.modifier}>{this.props.name}</h3>
                {this._shadow(true)}
                <div className={"o-card__media" + this.state.modifier}>
                    <Image src={this.props.image}/>
                </div>
                {this._shadow(false)}
                <p className={"o-card__content" + this.state.modifier}>{this.props.content}</p>
            </article>
        )
    }

    _shadow (is_top, size = 0.5) {

        let points = is_top ? `0,${size} 20,${size} 20,0` : `0,0 20,0 20,${size}`;
        let viewBox = `-5 0 20 ${size}`;

        return (
            <svg className="o-card__shadow" viewBox={viewBox} preserveAspectRatio="none">
                <polygon points={points} />
            </svg>
        )
    }

    _toggle_loading() {
        let loading = this.state.modifier === "" ? "--loading" : "";

        this.setState({modifier: loading})
    }
}