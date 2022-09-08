import React from 'react';
import './App.css';

const Footer = () => {  
    let year = new Date().getFullYear();
    return (
      <>
          <footer className='footer'>
          <div className="name">Company Name</div>
          <p className='name copy'>Copyright © {year}, Some rights are reserved.</p>
          </footer>
      </>
    )
}
export default Footer;
