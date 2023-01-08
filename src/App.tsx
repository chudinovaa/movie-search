import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import FavouritesPage from './pages/FavouritesPage';
import AboutPage from './pages/AboutPage';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
        <Navigation/>
        <div className="container">
          <Routes>
              <Route path="/" element={<SearchPage/>}/>
              <Route path="/favourites" element={<FavouritesPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
