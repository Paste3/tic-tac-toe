import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './bootstrap.min.css';
import Home from './views/Home'
import Layout from './views/LayOut/LayOut';
import Memotest from './views/memotest';
import Tateti from './views/tic-tac-toe';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/tic-tac-toe" element={<Tateti />}></Route>
            <Route path="/memotest" element={<Memotest />}></Route>
            <Route path="*" element={<p className="colorB">404</p>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
