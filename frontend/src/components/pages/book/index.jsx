import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../state/actions'
import './bookPage.css'
import Recommendations from '../../shared/Recommendations'
import AddToCartButton from '../../shared/AddToCartButton'

const BookPage = ({ products }) => {
  const { id } = useParams() // Получаем id из URL
  const dispatch = useDispatch()

  // Находим книгу по id
  const book = products.find(product => String(product.id) === String(id))

  if (!book) {
    return <p>Книга не найдена</p> // Если книга не найдена
  }

  const handleAddToCart = () => {
    dispatch(addToCart(book)) // Добавление книги в корзину с помощью Redux
    alert(`Книга "${book.name}" добавлена в корзину!`) // Показ уведомления
  }

  return (
    <div className='container'>
      <div className='book-details'>
        <img src={book.image} alt={book.name} className='cover' />
        <div className='info'>
          <div className='info-main'>
            <h1>{book.name}</h1>
            <p>{book.author}</p>
          </div>
          <div className='info-bar'>
            <p>
              <strong>Количество:</strong> {book.count}
            </p>
            <p>
              <strong>Цена:</strong> {book.cost} руб.
            </p>
            <AddToCartButton
              className='button'
              onClick={handleAddToCart}
              book={book}>
              Добавить в корзину
            </AddToCartButton>
          </div>
        </div>
      </div>
      <div className='description'>
        <p>{book.text}</p>
      </div>
      <div className='recommendations'>
        <h2>Товары, которые берут с этой книгой:</h2>
        <Recommendations />
      </div>
    </div>
  )
}

export default BookPage
