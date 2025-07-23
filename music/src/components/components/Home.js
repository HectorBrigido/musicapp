import { useState } from 'react';
import useFetch from '../hooks/useFetchMusic';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const url = `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`;
  const { data, loading, error } = useFetch(url);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <SearchResults albums={data.album} />}
    </div>
  );
}

export default Home;