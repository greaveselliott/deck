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
            <article className="card">
                <h3 className="card__name">{this.props.name}</h3>
                <Image className="card__image" src={this.props.image}/>
                <p className="card__content">{this.props.content}</p>
            </article>
        )
    }

}