import './App.css';
import { useContext } from 'react';
import MainContext from './context/MainContext';
import Home from './pages/Home';

function App() {
  const teste = useContext(MainContext);
  console.log(teste);
  
  return (
    <>
      <Home />
    </>
  );
}

export default App;
