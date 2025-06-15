import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Home from './components/pages/home'
import CatalogApp from './components/pages/catalog'
import BookPage from './components/pages/book'
import products from './data/products'
import Cart from './components/pages/cart'
import { useDispatch } from 'react-redux'
import { addToCart } from './state/actions'
import OrderForm from './components/pages/order'
import AuthPage from './components/pages/auth'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import AddBook from './components/pages/add-book'
import BookRequests from './components/pages/admin/BookRequests.jsx'
import { checkAuth } from './state/actions'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [dispatch])

  const handleAddToCart = book => {
    dispatch(addToCart(book))
  }

 const AdminRoute = ({ children }) => {
    const { token, user } = useSelector(state => state.auth);
    return token && user?.role === 'admin' ? children : <Navigate to='/' replace />;
  };


 const PrivateRoute = ({ children }) => {
    const token = useSelector(state => state.auth.token)
    return token ? children : <Navigate to='/auth' replace />
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/catalog'
          element={
            <CatalogApp products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path='/book/:id'
          element={
            <BookPage products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path='/cart'
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path='/order'
          element={
            <PrivateRoute>
              <OrderForm />
            </PrivateRoute>
          }
        />
        <Route path='/auth' element={<AuthPage />} />
        <Route
          path='/add-book'
          element={
            <PrivateRoute>
              <AddBook />
            </PrivateRoute>
          }
        />
        {/* Admin Route for Book Requests */}
        <Route path="/admin/book-requests" element={<AdminRoute><BookRequests /></AdminRoute>} />


      </Routes>
      <Footer />
    </Router>
  )
}

export default App
