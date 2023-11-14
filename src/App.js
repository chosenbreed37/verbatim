import SearchView from "./SearchView";
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');

  const onSearch = () => {
    console.log('>>> onSearch...');    
  }

  const onSetSearchText = (text) => {
    console.log('>>> onSetSearchText: ', text);
    setSearchText(text);
  }

  return (
      <SearchView onChangeText={onSetSearchText} onSearch={onSearch} />
  );
}

export default App;
