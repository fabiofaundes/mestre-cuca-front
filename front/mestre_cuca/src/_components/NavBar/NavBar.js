import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/images/mestre_cuca_logo.png'
import { Link, useLocation } from 'react-router-dom'

const StyledNav = styled.nav `

  display: grid;
  grid-template-columns: 1fr 276px 1fr;
  padding: 0px 20px;  

  .item {
    font-family: 'Roboto Slab';
    font-size: 18px;
    color: black;    
    cursor: pointer;
    text-decoration: none;
  }

  .item:hover {
    text-decoration: underline;
  }

  .item.active {
    font-weight: bold;    
  }

  img {    
    width: 200px;
    margin: auto;
  }  

`

const SignUpButton = styled.button `
  background: none;
  border: 1px solid #E5E5E5;
  border-radius: 10px;
  padding: 7px 15px;
  margin-left: 8px;
  font-weight: bold;
`

const NavBar = () => {

  const location = useLocation()
  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <StyledNav>

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
        <Link to='/' className={`item ${isActive('/')}`}>Ingredientes</Link>

        <Link to='/armazens' className={`item ${isActive('/armazens')}`}>Armazéns</Link>
      
        <Link to='/lista-de-compras' className='item'>Lista de Compras</Link>
      </div>

      <img alt='logo' src={logo} />

      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
        <Link to='/receitas' className='item'>Receitas</Link>      

        <Link to='/pesquisar' className='item'>Pesquisar</Link>

        <div>
          <Link to='/login' className='item'>Login</Link>
          <SignUpButton className='item'>Sign Up</SignUpButton>
        </div>
      </div>

    </StyledNav>
  )
}

export default NavBar