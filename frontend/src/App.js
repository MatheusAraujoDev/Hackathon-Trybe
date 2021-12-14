import './App.css';
import { useContext } from 'react';
import MainContext from './context/MainContext';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const teste = useContext(MainContext);
  console.log(teste);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
