import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Routes>
           <Route path="/" element={<Navbar/>}/>
        </Routes>
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
