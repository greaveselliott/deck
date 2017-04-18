import React from 'react';
import Card from "../03_organisms/card";

export default class CardsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            cards: [

            ]
        }
    }

    render() {
      return (
          <ul className="cards">
              {
                  this.state.cards.map((card) =>
                    <li key={card.name.toString()}><Card name={card.name} image={card.image} content={card.content}/></li>
                  )
              }
          </ul>
      )
    }

    componentDidMount() {
        this._add_card('Elliott', "http://placehold.it/580x380", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Julian', "http://placehold.it/580x380", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Sophia', "http://placehold.it/580x380", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Joshua', "http://placehold.it/580x380", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Sam', "http://placehold.it/580x380", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
    }

    _add_card (name, image, content) {
        let Card = {};

        Card.name = name;
        Card.image = image;
        Card.content = content;

        this.setState((prevState) => ({
            cards: prevState.cards.concat(Card)
        }));
    }
}
