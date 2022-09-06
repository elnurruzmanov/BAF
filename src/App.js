import React from "react";
import "./App.css";
//react-router-dom
import { Routes, Route } from "react-router-dom";

//pages
import Main from "./pages/Main/main";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
       <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
    </div>
  );
}

export default App;
