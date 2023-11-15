import SearchQuery from "./SearchQuery";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { createService } from "./quotes-service";

function SearchView({ }) {
    const [searchText, setSearchText] = useState('');

    const onSearch = () => {
        const srv = createService();
        console.log('>>> searching for: ', searchText);
        const results = srv.search(searchText);
        console.log('>>> results: ', results);
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