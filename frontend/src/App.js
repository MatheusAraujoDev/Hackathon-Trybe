import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route exact path='/cities/:id' element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
