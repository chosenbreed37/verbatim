function SearchQuery({onChangeText, onSearch}) {
    const onChange = (e) => {
        onChangeText(e.target.value);
    }

    return (<div arial-label="search-query">
        <input type="text" role="textbox" aria-label="search-box" onChange={onChange} />
        <button type="button" role="button" aria-label="search-button" onClick={onSearch}>Search</button>
    </div>);
}

export default SearchQuery;