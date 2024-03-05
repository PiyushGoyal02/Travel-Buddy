import './App.css';
import {Routes, Route, Link, } from 'react-router-dom';
import Packages from './Routee/Packages';
import Home from './Routee/Home';
import { TbWorldSearch } from "react-icons/tb";
import Shooping from './Routee/Shooping';
import Contact from './Routee/Contact';
import Details from './Routee/Details';

function App() {

  return (
    <div>

      <nav className="NAVBAR">

        <div className="icon-travel">
          <Link to='/'><div className="WorldIcon"><TbWorldSearch /></div></Link>
            <span>Trevel Buddy</span>
        </div>

        <div className="TAGS">
          <Link className='span' to='/'>Home</Link>
          <Link className='span' to='/Details'>Details</Link>
          <Link className='span' to='/Packages'>Packages</Link>
          <Link className='span' to='/Contact'>Contact</Link>
          <Link className='span' to='/Shooping'>Shooping</Link>
        </div>

        <div>
          <button className="BOOKNOW">Book Now</button>
        </div>

      </nav>


      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Packages' element={<Packages/>}></Route> 
        <Route path='/Details' element={<Details/>}></Route>
        <Route path='/Shooping' element={<Shooping/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
