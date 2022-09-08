import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">XYZ co.<span>logo</span></div>
      <ul className='list'>
      <li><Link to='/'><div className="n_icon">Home</div></Link></li>
        <li><Link to='/about'><div className="n_icon">About</div></Link></li>
        <li><Link to='/services'><div className="n_icon">Services</div></Link></li>
        <li><Link to='/contact'><div className="n_icon">Contact</div></Link></li>      </ul>
    </div>
    </>
  );
};

export default Menu;
