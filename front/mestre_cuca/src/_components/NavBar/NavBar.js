import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/images/mestre_cuca_logo.png'
import { Link, useLocation } from 'react-router-dom'

const StyledNav = styled.nav `

  display: flex;
  align-items: center;
  justify-content: space-between;

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
    margin: 0px 38px;
  }

  .central-items {
    display: flex;
    align-items: center;
  }  

`

const NavBar = () => {

  const location = useLocation()
  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <StyledNav>
      <Link to='/' className={`item ${isActive('/')}`}>Ingredientes</Link>

      <Link to='/armazens' className={`item ${isActive('/armazens')}`}>Armazéns</Link>

      <div className="central-items">
        <Link to='/lista-de-compras' className='item'>Lista de Compras</Link>
        <img alt='logo' src={logo} />
        <Link to='/receitas' className='item'>Receitas</Link>
      </div>

      <Link to='/pesquisar' className='item'>Pesquisar</Link>

      <div>
        <Link to='/login' className='item'>Login</Link>
        <button>Sign Up</button>
      </div>

    </StyledNav>
  )
}

export default NavBar