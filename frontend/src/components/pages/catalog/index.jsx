import React, { useState } from 'react'
import Search from '../../shared/Search/index.jsx'
import Catalog from '../../shared/Catalog/index.jsx'
import { fuzzySearch } from '../../../utils/index.js'

const CatalogApp = ({ products, onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (searchValue, searchType) => {
    if (!searchValue) {
      setFilteredProducts(products)
      return
    }

    const filtered = products.filter(product =>
      searchType === 'exact'
        ? product.name.toLowerCase().includes(searchValue.toLowerCase())
        : fuzzySearch(product.name.toLowerCase(), searchValue.toLowerCase(), 3)
    )

    setFilteredProducts(filtered)
  }

  return (
    <div>
      <header>
        <Search onSearch={handleSearch} />
      </header>
      <main>
        <Catalog products={filteredProducts} onAddToCart={onAddToCart} />
      </main>
    </div>
  )
}

export default CatalogApp
