import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';


class App extends Component {
  componentDidMount() {
    console.log("La app se ha cargado correctamente.");
  }

  render() {
    const songs = [
      { title: "The Rapture", artist: "Black Coffee", duration: "6:58" },
      { title: "Never Walk Alone", artist: "BLOND:ISH, Stevie Appleton", duration: "3:08" },
      { title: "everything i wanted", artist: "Billie Eilish", duration: "4:05" },
    ];

    return (
      <div className="app-container">
        <Header title="My Music List" />
        {songs.map((song, index) => (
          <Song
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>
    );
  }
}

export default App;