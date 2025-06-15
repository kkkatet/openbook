import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Catalog = ({ products = [] }) => {
  const navigate = useNavigate()

  const handleCardClick = id => {
    navigate(`/book/${id}`)
  }

  return (
    <div className='catalog'>
      {Array.isArray(products) && products.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        Array.isArray(products) &&
        products.map((product, index) => (
          <div
            key={index}
            className='product-card'
            onClick={() => handleCardClick(product.id)}
            style={{ cursor: 'pointer' }}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {product.new && <span className='new-product'>Новинка</span>}
            <p>
              Стоимость:{' '}
              {product.sale > 0 ? (
                <span>
                  <span className='sale-cost'>
                    {(product.cost * (1 - product.sale / 100)).toFixed(2)}
                  </span>
                  <span> </span>
                  <span className='orig-cost'>{product.cost.toFixed(2)}</span>
                </span>
              ) : (
                product.cost.toFixed(2)
              )}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default Catalog
