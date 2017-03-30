import React from "react";
import IconSearch from '../01_atoms/icon-search';

export default class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            value: "",
            modifier: "",
            focused: false,
            disabled: false,
            searching: false,
            last_result: null
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form action="post" className={"m-search" + this.state.modifier} onSubmit={this.handleSubmit()}>
                <IconSearch className={"m-search__icon" + this.state.modifier}/>
                <input type="text" className={"m-search__field" + this.state.modifier} name="search" value={this.state.value} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
                <input type="submit" className="m-search__submit"/>
            </form>
        )
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleFocus() {
        this.setState({focused: true, modifier: "--focused"});
    }

    handleBlur() {
        if (this.is_search_empty()) {
            this.setState({focused: false, modifier: ""});
        }
    }

    is_search_empty () {
        return this.state.value === "";
    }

    handleSubmit(event) {
        console.log(event);
        console.log('A name was submitted: ' + this.state.value);
    }
}