import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChoreChampionProvider } from './context/ChoreChampionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChoreChampionProvider>
    <App />  
  </ChoreChampionProvider>  
);


