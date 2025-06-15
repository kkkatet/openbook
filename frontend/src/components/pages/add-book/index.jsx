import React, { useState } from 'react'
import axios from 'axios'
import './style.css'

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  })
  const [isSent, setIsSent] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:4001/send-email', formData)
      setIsSent(true)
      alert('Ваш заказ успешно оформлен!')
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error)
      alert('Ошибка при отправке заказа. Попробуйте позже.')
    }
  }

  return (
    <div className='form-container'>
      <h1>Оформление заказа</h1>
      {isSent ? (
        <p>Ваш заказ успешно отправлен! Проверьте вашу почту.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Ваше имя'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Ваш email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name='address'
            placeholder='Адрес доставки'
            value={formData.address}
            onChange={handleChange}
            required
          />
          <textarea
            name='message'
            placeholder='Комментарий к заказу (необязательно)'
            value={formData.message}
            onChange={handleChange}
          />
          <button type='submit' className='submit-btn'>
            Отправить заказ
          </button>
        </form>
      )}
    </div>
  )
}

export default AddBookForm
