const AuthorStyle = {
    fontSize: 'smaller',
    fontWeight: 'bold',
    marginLeft: '5px'
};

const QuoteStyle = {marginRight: '5px'};

function SearchResult({ text, author }) {
    return (<p>
        <span style={QuoteStyle}>&quot;{text}&quot;</span>-<span style={AuthorStyle}>{author}</span>
    </p>);
}

export default SearchResult;