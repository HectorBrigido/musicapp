import React from 'react';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No hay resultados.</p>;
  }

  return (
    <ul>
      {results.map((album) => (
        <li key={album.idAlbum}>
          <h3>{album.strAlbum}</h3>
          <p>Artista: {album.strArtist}</p>
          {album.songs && (
            <ul>
              {album.songs.map((song) => (
                <li key={song.idTrack}>
                  {song.strTrack} - {song.strAlbum}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;