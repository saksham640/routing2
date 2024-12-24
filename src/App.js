import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Hello from "../src/components/Hello.js"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/hello' element = {<Hello/>}/>
      <Route path='*' element = {<div>defualt element</div>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
