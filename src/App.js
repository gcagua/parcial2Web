import logo from './logo.svg';
import './App.css';
import Bands from "./components/Bands"
import Banner from "./components/Banner"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Banner></Banner>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bands />} />
         <Route path="/bands" element={<Bands />} />
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
