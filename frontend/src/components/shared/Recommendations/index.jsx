import React from 'react'
import './style.css'

const recomProducts = [
  {
    id: 1,
    title: 'Закладка для книг',
    description:
      'Элегантная закладка для ваших любимых книг.',
    price: '5 бел. руб.',
    image: 'https://incarne.ua/cdn/shop/files/IMG_7422_800x.jpg?v=1723717341'
  },
  {
    id: 2,
    title: 'Лампа для чтения',
    description: 'Удобная лампа для чтения с регулируемой яркостью.',
    price: '42 бел. руб.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUPwxsxLF1hQIKq8Ow-rup291gmFccbH65w&s'
  },
  {
    id: 3,
    title: 'Плед для чтения',
    description: 'Мягкий плед, создающий атмосферу уюта для чтения.',
    price: '55 бел. руб.',
    image: 'https://perina-peroni.ru/images/products/original/0f8bdee7-9f9d-11ec-94d8-001e67517db4.jpg'
  },
  {
    id: 4,
    title: 'Чайный набор',
    description:
      'Набор для чая с чашкой и чайником, чтобы насладиться чтением.',
    price: '25 бел. руб.',
    image: 'https://artefacto.ru/img/work/nomencl/keramicheskij-chajnik-chashki-45192.jpg'
  }
]

const Recommendations = () => {
  return (
    <div className='container'>
      {recomProducts.map(product => (
        <div key={product.id} className='recomItem'>
          <img src={product.image} alt={product.title} className='recomImage' />
          <div className='recomInfo'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              <strong>Цена: {product.price}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Recommendations
