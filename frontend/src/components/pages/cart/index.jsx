import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../../state/actions'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.cost, 0).toFixed(2)
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/order`)
  }

  return (
    <div className='cart'>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
          <div className='cart-items'>
            {cartItems.map(item => (
              <div key={item.id} className='cart-item'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='cart-item-image'
                />
                <div className='cart-item-details'>
                  <div className='item-info'>
                    <h3>{item.title ?? item.name ?? 'Имя не указано'}</h3>
                    <p>{item.author}</p>
                  </div>
                  <div className='item-bar'>
                    <p>{item.cost} бел. руб.</p>
                    <button
                      className='remove-btn'
                      onClick={() => dispatch(removeFromCart(item.id))}>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='cart-summary'>
            <p>
              <strong>Общая стоимость:</strong> {calculateTotal()} руб.
            </p>
            <button className='checkout-btn' onClick={handleSubmit}>
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Cart
