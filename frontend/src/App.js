import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import AddMusic from './Components/AddMusic';
import ListMusic from './Components/ListMusic';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Link to="/homepage">Home</Link>
      <Link to="/login">Login</Link */}
      
          <Navbar />
          <Routes>
          
            <Route element={<Login/>} path="login"/>
            <Route element={<AddMusic/>} path="addmusic"/>
            <Route element={<ListMusic/>} path="listmusic"/>
      
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
