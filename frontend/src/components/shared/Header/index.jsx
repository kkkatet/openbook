import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
import {
  HiBookOpen,
  HiHome,
  HiShoppingCart,
  HiSquares2X2,
  HiViewColumns
} from 'react-icons/hi2'
import AccountLabel from '../AccountLabel'

const links = [
  {
    to: '/',
    children: (
      <>
        <HiHome /> <span>Главная</span>{' '}
      </>
    )
  },
  {
    to: '/catalog',
    children: (
      <>
        <HiSquares2X2 /> <span>Каталог</span>
      </>
    )
  },
  {
    to: '/cart',
    children: (
      <>
        <HiShoppingCart /> <span>Корзина</span>
      </>
    )
  }
]

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <h4 className='title'>
          <HiBookOpen />
          OpenBook
        </h4>
      </Link>
      <nav>
        {links.map(x => (
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            to={x.to}>
            {x.children}
          </NavLink>
        ))}
      </nav>
      <AccountLabel></AccountLabel>
    </header>
  )
}

export default Header
