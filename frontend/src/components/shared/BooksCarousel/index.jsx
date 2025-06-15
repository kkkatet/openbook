import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './style.css'
import AddToCartButton from '../AddToCartButton'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../state/actions'

const BooksCarousel = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleBooks, setVisibleBooks] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    setVisibleBooks(books.slice(currentIndex, currentIndex + 3))
  }, [books, currentIndex])

  const handlePrevClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0))
  }

  const handleNextClick = () => {
    setCurrentIndex(Math.min(currentIndex + 1, books.length - 3))
  }

  const handleAddToCart = book => {
    dispatch(addToCart(book))
    alert(`Книга "${book.title}" добавлена в корзину!`)
  }

  return (
    <div className='books-carousel'>
      <button className='carousel-btn prev' onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <div className='carousel-items'>
        {visibleBooks.map(book => (
          <div key={book.id} className='carousel-item'>
            <div className='carousel-info'>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <div className='carousel-bar'>
              <AddToCartButton onClick={() => handleAddToCart(book)}>
                {book.cost}
              </AddToCartButton>
              <p>{book.cost} бел. руб.</p>
            </div>
          </div>
        ))}
      </div>
      <button className='carousel-btn next' onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
  )
}

export default BooksCarousel
