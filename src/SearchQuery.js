function SearchQuery({ onChangeText, onSearch }) {
    const onChange = (e) => {
        onChangeText(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    }

    return (<section arial-label="search-query">
        <input type="text" role="textbox" aria-label="search-box" onChange={onChange} onKeyDown={ handleKeyPress} />
        <button type="button" role="button" aria-label="search-button" onClick={onSearch}>Search</button>
    </section>);
}

export default SearchQuery;