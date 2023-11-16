import SearchQuery from "./SearchQuery";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { createService } from "./quotes-service";

function SearchView({ }) {
    const [searchText, setSearchText] = useState('');
    const [matches, setMatches] = useState([]);

    const onSearch = () => {
        const srv = createService();
        const results = srv.search(searchText);
        setMatches(results);
    }

    const onChangeText = (text) => {
        setSearchText(text);
    }

    return (<div>
        <SearchQuery onChangeText={onChangeText} onSearch={onSearch} />
        <SearchResults matches={matches} />
    </div>);
}

export default SearchView;