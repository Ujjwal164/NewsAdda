import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './Component/News';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={10} country={"in"} category={"general"} />} />
            <Route path="/business" element={<News key="business" pageSize={10} country={"in"} category={"business"} />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={10} country={"in"} category={"entertainment"} />} />
            <Route path="/general" element={<News key="general" pageSize={10} country={"in"} category={"general"} />} />
            <Route path="/health" element={<News key="health" pageSize={10} country={"in"} category={"health"} />} />
            <Route path="/science" element={<News key="science" pageSize={10} country={"in"} category={"science"} />} />
            <Route path="/sports" element={<News key="sports" pageSize={10} country={"in"} category={"sports"} />} />
            <Route path="/technology" element={<News key="technology" pageSize={10} country={"in"} category={"technology"} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
