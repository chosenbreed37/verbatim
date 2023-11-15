const quotes = require('./data/quotes.json');


function search(searchTerm, collection) {    
    const regex = new RegExp(searchTerm, 'i');
    function match (target) {
        return target && regex.test(target);
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
