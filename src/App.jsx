import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';
import Favorites from './Components/Favorites';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipes' element={<Recipes/>} />
           <Route path='/' element={<Favorites/>} /> 
          <Route path='/settings' element={<Settings/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
