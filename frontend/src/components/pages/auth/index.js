import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../state/actions'
import './style.css'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(state => state.auth)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await dispatch(loginUser(email, password, isLogin))
    if (result.success) {
      navigate('/')
    }
  }

  return (
    <div className='auth-container'>
      <div className='form-container'>
        <h1>{isLogin ? 'Вход в систему' : 'Регистрация'}</h1>

        {error && <div className='error-message'>{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type='submit' className='submit-btn' disabled={isLoading}>
            {isLoading
              ? 'Загрузка...'
              : isLogin
              ? 'Войти'
              : 'Зарегистрироваться'}
          </button>
        </form>

        <div className='switch-mode'>
          {isLogin ? (
            <p>
              Нет аккаунта?{' '}
              <button
                type='button'
                className='switch-btn'
                onClick={() => setIsLogin(false)}>
                Зарегистрироваться
              </button>
            </p>
          ) : (
            <p>
              Уже есть аккаунт?{' '}
              <button
                type='button'
                className='switch-btn'
                onClick={() => setIsLogin(true)}>
                Войти
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthPage
