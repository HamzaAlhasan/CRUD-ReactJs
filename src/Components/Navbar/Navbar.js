import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbsr() {
  return (
    <>
    <div className="contanier-nav" >
        <div className="logo">
            <h1>CRUD</h1>
        </div>
        <div className="menu" >
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href='/#'>About</a></li>
                <li><a href='/#'>Contact</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbsr
