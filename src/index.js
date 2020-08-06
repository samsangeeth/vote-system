import React from 'react';
import ReactDOM from 'react-dom';
//import "./styles.css";
import ArtistList from './ArtistList';

function App() {
  return(
    <div className="app">
      <ArtistList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
