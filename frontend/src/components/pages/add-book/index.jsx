import React, { useState } from 'react'

import axios from 'axios';
const AddBook = () => {
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    cost: '',
    count: '',
    image: '',
    text: '',
    new: '',
    sale: '',
  })

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setBookData({ ...bookData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', bookData.name);
    formData.append('author', bookData.author);
    formData.append('cost', bookData.cost);
    formData.append('count', bookData.count);
    formData.append('image', bookData.image); // Assuming bookData.image is a File object
    formData.append('text', bookData.text);
    formData.append('new', bookData.new);
    formData.append('sale', bookData.sale);

    try {
      const response = await axios.post(
        'http://localhost:4001/api/books/upload',
        formData
      );
      await axios.post('http://localhost:4001/send-email', formData)
      setIsSent(true)
      alert('Ваш заказ успешно оформлен!')
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error)
      alert('Ошибка при отправке заказа. Попробуйте позже.')
    }
  }
console.log('isSent', isSent)
 return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={bookData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={bookData.author} onChange={handleChange} required />
        </div>
        <div>
          <label>Cost:</label>
          <input type="number" name="cost" value={bookData.cost} onChange={handleChange} required />
        </div>
        <div>
          <label>Count:</label>
          <input type="number" name="count" value={bookData.count} onChange={handleChange} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={bookData.image} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="text" value={bookData.text} onChange={handleChange} required />
        </div>
        <div>
          <label>New (e.g., 'Новинка'):</label>
          <input type="text" name="new" value={bookData.new} onChange={handleChange} />
        </div>
        <div>
          <label>Sale (e.g., 10):</label>
          <input type="number" name="sale" value={bookData.sale} onChange={handleChange} />
        </div>
        <button type="submit">Submit Book for Review</button>
      </form>
    </div>
  )
}

export default AddBook;
