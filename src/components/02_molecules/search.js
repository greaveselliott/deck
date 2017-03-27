import React from "react";
import IconSearch from '../01_atoms/icon-search';

export default class Search extends React.Component {
    render() {
        return (
            <form action="post" className="m-search" onSubmit="search()">
                <IconSearch className="m-search__icon"/>
                <input type="text" className="m-search__field" name="search" placeholder="Search..."/>
                <input type="submit" className="m-search__submit"/>
            </form>
        )
    }

    _search () {
        // do something
    }
}