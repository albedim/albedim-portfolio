import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';


function App() {
  return (
    <BrowserRouter basename='/albedim-portfolio'>
      <Routes>
        <Route path='/' element={<><Home/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
