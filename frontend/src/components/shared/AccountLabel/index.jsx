import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../state/actions'
import { useNavigate } from 'react-router-dom'
import './style.css'

const AccountLabel = () => {
  const { user, token } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/auth')
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <div className='account-label-container'>
      {token ? (
        <div className='account-authenticated'>
          <span className='account-email'>{user?.email}</span>
          <button
            className='account-button logout-button'
            onClick={handleLogoutClick}>
            Выйти
          </button>
        </div>
      ) : (
        <button
          className='account-button login-button'
          onClick={handleLoginClick}>
          Войти
        </button>
      )}
    </div>
  )
}

export default AccountLabel
