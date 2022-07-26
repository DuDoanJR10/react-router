import React from "react";
import Layout from './components/Layout'
import Home from './components/Home'
import Header from './components/Header'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import About from "./components/About";
import NoResult from "./components/NoResult";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='header' element={<Header />} />
          <Route path='no/:id' element={<NoResult />} />
          <Route path="*" element={<NoResult />} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App