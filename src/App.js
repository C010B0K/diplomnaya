import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Main } from "./pages/main";
import { Bezug } from "./pages/bezug";
import { About } from "./pages/about"

function App() {
  return (
    <div>
      <Header/>
      <div>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/order' element={<Bezug />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
