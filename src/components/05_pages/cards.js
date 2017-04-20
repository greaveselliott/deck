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
          <section className="p-cards">
              {
                  this.state.cards.map((card) =>
                    <Card key={card.name.toString()} name={card.name} image={card.image} content={card.content}/>
                  )
              }
          </section>
      )
    }

    componentDidMount() {
        this._add_card('Elliott', "http://placebeyonce.com/410-300", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Julian', "http://placebeyonce.com/400-310", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Sophia', "http://placebeyonce.com/400-300", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Joshua', "http://placebeyonce.com/390-300", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Sam', "http://placebeyonce.com/400-320", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Joe', "http://placebeyonce.com/410-300", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Mike', "http://placebeyonce.com/400-310", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Ayelisha', "http://placebeyonce.com/400-300", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Reiss', "http://placebeyonce.com/390-300", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");
        this._add_card('Bean', "http://placebeyonce.com/400-320", "Lorem ipsum dolor sitz vamet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.");

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
