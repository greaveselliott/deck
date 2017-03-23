import React from "react";

export default class Search extends React.Component {
    render() {
        return (
            <form action="post" className="m-search" onSubmit="search()">
                <input type="text" className="m-search__field" name="search" placeholder="Search..."/>
                <input type="submit" className="m-search__submit"/>
            </form>
        )
    }

    _search () {
        // do something
    }
}