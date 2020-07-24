import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from './../../assets/logo.png';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 5px 0;
  }
  @media (max-width: 768px) {
    
  }
`


  



const Navbar = () => {
  
  return (
    <Nav>
      <Burger />
      
      <div className="logo" >
        <img src={logo}  width="120" />
      </div>
    </Nav>
  )
}

export default Navbar
