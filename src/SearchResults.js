import SearchResult from "./SearchResult";

const ListItemStyle = { listStyle: 'None'};

function SearchResults({ matches }) {
    return (<section>
        <ul>
            {matches.map(q => (<li style={ListItemStyle}><SearchResult {...q} /></li>))}
        </ul>
    </section>);
}

export default SearchResults;