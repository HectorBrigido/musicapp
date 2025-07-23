import React, { useState } from 'react';
import useFetch from '../hooks/useFetchMusic';
import SearchResults from '../components/SearchResults';
import SearchBar from '../components/SearchBar';

function SearchPage() {
      const [searchTerm, setSearchTerm] = useState('');
      const { data, loading, error } = useFetch(
        `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`
      );

      const handleSearch = (term) => {
        setSearchTerm(term);
      };

      return (
        <div>
          <SearchBar onSearch={handleSearch} />
          {loading && <p>Cargando...</p>}
          {error && <p>Error: {error.message}</p>}
          {data && <SearchResults songs={data.album} />}
        </div>
      );
}

    export default SearchPage;