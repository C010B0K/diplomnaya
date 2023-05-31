import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/header";
import { Main } from "./pages/main";

function App() {
  return (
    <div>
      <Header/>
      <div>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </div>
        
    </div>
  );
}

export default App;
