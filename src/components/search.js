import React from "react";

export default class Search extends React.Component {
    render() {
        return (
            <form action="post" className="search" onSubmit="search()">
                <input type="text" className="search__field" name="search"/>
                <input type="submit" className="search__button"/>
            </form>
        )
    }

    _search () {
        // do something
    }
}