const quotes = require('./data/quotes.json');


function search(searchTerm, collection) {    
    function match (target) {
        return target && target.search(searchTerm);
    }

    return collection
        .filter(q => match(q.text) || match(q.author) || match(q.source ));
}

export function createService(collection) {
    const ds = collection || quotes;
    return {
        search: (searchTerm) => search(searchTerm, ds)
    }
}
