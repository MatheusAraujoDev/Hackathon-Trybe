import './App.css';
import Home from './pages/Home';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> 6d7f1f60814d3d324eb7d71fe992a3b4837c2b15

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
=======
        <Route path="/" component={ <Home /> }/>
>>>>>>> 6d7f1f60814d3d324eb7d71fe992a3b4837c2b15
      </Routes>
    </BrowserRouter>
  );
}

export default App;
