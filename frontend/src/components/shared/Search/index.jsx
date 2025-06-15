import React, { useState } from 'react'
import './style.css'

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchType, setSearchType] = useState('exact')

  const handleSearchInput = e => {
    setSearchValue(e.target.value)
    onSearch(e.target.value, searchType) // Передаём данные в родителя
  }

  const handleSearchTypeChange = e => {
    setSearchType(e.target.value)
    onSearch(searchValue, e.target.value) // Передаём данные в родителя
  }

  return (
    <div className='search'>
      <div className='search-header'>
        <label>
          <input
            type='text'
            placeholder='Поиск...'
            value={searchValue}
            onChange={handleSearchInput}
          />
        </label>
        <label>
          <select
            className='select'
            value={searchType}
            onChange={handleSearchTypeChange}>
            <option value='exact'>Точное совпадение</option>
            <option value='partial'>Частичное совпадение</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Search
