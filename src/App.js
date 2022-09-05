import React from "react";
import "./App.css";
//react-router-dom
import { Routes, Route } from "react-router-dom";

//pages
import Main from "./pages/Main/main";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </div>
  );
}

export default App;
