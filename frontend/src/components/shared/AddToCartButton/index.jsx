import React from 'react'
import './style.css'
import { HiShoppingCart } from 'react-icons/hi2'

const AddToCartButton = ({ onClick, book, className }) => {
  return (
    <button
      className={`add-to-cart ${className}`}
      onClick={e => {
        e.stopPropagation()
        onClick(book)
      }}>
      <HiShoppingCart />В корзину
    </button>
  )
}

export default AddToCartButton
