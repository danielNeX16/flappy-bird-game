import React from 'react';
import ReactDOM from 'react-dom/client';
import './Game.css'; // Import your main CSS file
import Game from './components/Game'; // Import the main Game component

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
