import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Items, Pokemon, Pokemons } from './paginas';
import Temporada from './paginas/temporada';
import PrimeraGeneracion from './paginas/primeraGeneracion';
import SegundaGeneracion from './paginas/segundaGeneracion';
import TerceraGeneracion from './paginas/terceraGeneracion';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/pokemons/:name" element={<Pokemon />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/temporadas" element={<Temporada />} />
          <Route path="/primera-generacion" element={<PrimeraGeneracion />} />
          <Route path="/segunda-generacion" element={<SegundaGeneracion />} />
          <Route path="/tercera-generacion" element={<TerceraGeneracion />} />
          

          <Route path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
