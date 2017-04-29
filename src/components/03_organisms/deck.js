import React from "react";
import Card from "./card"

export default class Deck extends React.Component {

    constructor() {
        super();

        this.state = {
            id: null,
            name: null,
            cards: {

            }
        };
    }

    render() {
        return(
            <section className="o-deck">
                <h1 className="o-deck__name">{this.state.name}</h1>
                <div className="o-deck__content">
                    {this._set_cards()}
                </div>
            </section>
        );
    }

    _set_cards() {
        this.state.cards.map((card) =>
            <Card key={card.name.toString()} name={card.name} image={card.image} content={card.content}/>
        );
    }
}