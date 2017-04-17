import React from "react";
import Image from "../01_atoms/image";

export default class Card extends React.Component {

    constructor() {
        super();

        this.state = {
            guid: 'insert-guid-here',
            title: this.props.title,
            image: {
                src: "http://placehold.it/160x100"
            },

            content: this.props.content
        }
    }

    render() {
        return (
            <article className="card">
                <h3 className="card__name">{this.state.title}</h3>
                <Image className="card__image" src={this.state.image.src}/>
                <p className="card__content">{this.state.content}</p>
            </article>
        )
    }
}