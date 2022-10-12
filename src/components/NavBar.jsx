
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";


const NavBar = () => {

    const [showForm, setShowForm]= useState(false)
    function handleClick(){
        setShowForm(showForm=>!showForm)
    }
    return (
      <nav>
      <div className="nb">
      <ul >
      
      <NavLink to="/about" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              textDecoration: 'none',
              borderRadius: '40px',
              padding: '4px'
            })} > News </NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              borderRadius: '40px',
              padding: '4px'
            })} >Contact Us </NavLink>
      <NavLink to="/" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
              borderRadius: '40px',
              padding: '3px'
            })} >About Us</NavLink>
     

      <h3>DAILYNEWS</h3>
      <div>
       <button onClick={() => setShowForm(prev => !prev)}>Login</button>
        
        {showForm && <Login/>}
        
        </div>
        
        </ul>
      </div>
      </nav>
    );
  }
  
  export default NavBar;