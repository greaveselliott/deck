import React from "react";
import Image from "../01_atoms/image";

export default class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            guid: null,
            name: null,
            image: null,
            content: null
        }
    }

    render() {

        return (
            <article className="o-card">
                <h3 className="o-card__name">{this.props.name}</h3>
                {this._shadow(true)}
                <div className="o-card__media">
                    <Image src={this.props.image}/>
                </div>
                {this._shadow(false)}
                <p className="o-card__content">{this.props.content}</p>
            </article>
        )
    }

    _shadow(is_top, size = 0.5) {

        let points = is_top ? `0,${size} 20,${size} 20,0` : `0,0 20,0 20,${size}`;
        let viewBox = `-5 0 20 ${size}`;

        return (
            <svg className="o-card__shadow" viewBox={viewBox} preserveAspectRatio="none">
                <polygon points={points} />
            </svg>
        )
    }
}