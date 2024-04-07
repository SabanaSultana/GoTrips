import React from 'react'
import NavBar from './components/Navbar';
// import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import ChooseAgent from './pages/ChooseAgent';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {
  return (
    <div className='' >     
      <NavBar/>  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/agent' element={<ChooseAgent/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
     </Routes>       
    </div>
  );
}

export default App;
