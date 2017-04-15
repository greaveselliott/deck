import React from "react";
import Image from "../01_atoms/image";

export default class Navigation extends React.Component {

    constructor() {
        super();

        this.state = {
            guid: 'insert-guid-here',
            title: this.props.title,
            image: {

            },
            content: this.props.content
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card__image"></div>
            </div>
        )
    }
}