import SearchQuery from "./SearchQuery";
import { useState } from "react";
import SearchResults from "./SearchResults";

function SearchView({ }) {
    const [searchText, setSearchText] = useState('');

    const onSearch = () => {
    }

    const onChangeText = (text) => {
        setSearchText(text);
    }

    return (<div>
        <SearchQuery onChangeText={onChangeText} onSearch={onSearch} />
        <SearchResults />
    </div>);
}

export default SearchView;