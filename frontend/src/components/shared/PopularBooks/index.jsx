import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const PopularBooks = ({ popular }) => {
  return (
    <div className='popularBooks'>
      {popular.map((book, index) => {
        return (
          <Link to={`/book/${book.id}`} key={index} className='book-card'>
            <div className='book-info'>
              <img src={book.image} alt={book.title} className='popularImage' />
              <h2 className='popularTitle'>{book.title}</h2>
              <p className='popularAuthor'>{book.author}</p>
            </div>
            <div>
              <h3 className='popularPrice'>{book.price} бел. руб.</h3>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default PopularBooks
