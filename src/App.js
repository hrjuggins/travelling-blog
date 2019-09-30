import React from 'react';
import './App.css';

import ImageUpload from './pages/ImageUpload'
import ImageFetch from './pages/ImageFetch'
import MapPage from './pages/Map'

function App() {
  return (
    <div className="App">
      <ImageUpload />
      <ImageFetch />
      <MapPage />
    </div>
  );
}

export default App;
