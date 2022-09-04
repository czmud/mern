import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./practice/home";
import { Number } from "./practice/number"
import { Word } from "./practice/Word";
//Remember, we can write these functional components in their own files 
//to be exported and imported to the App component.
//We've combined them here to simplify our example.
    
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:routeNumber" element={<Number />}/>
        <Route path="/words/:wordText" element={<Word />}/>
        <Route path="/words/:wordText/:textColor" element={<Word />}/>
        <Route path="/words/:wordText/:textColor/:backgroundColor" element={<Word />}/>
      </Routes>
    </div>
  );
}
    
export default App
