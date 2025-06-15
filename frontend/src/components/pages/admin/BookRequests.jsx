import React, { useState, useEffect } from 'react'

const BookRequests = () => {
  const [bookRequests, setBookRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBookRequests = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('token') // Assuming token is stored in local storage
        const response = await fetch('http://localhost:4001/api/book-requests', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setBookRequests(data)
      } catch (error) {
        setError(error)
        console.error('Error fetching book requests:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBookRequests()
  }, [])

  const handleApprove = async (bookId) => {
    try {
      const token = localStorage.getItem('token') // Assuming token is stored in local storage
      const response = await fetch(`http://localhost:4001/api/approve-book/${bookId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Remove the approved book from the list
      setBookRequests(bookRequests.filter(request => request.id !== bookId));
    } catch (error) {
      console.error('Error approving book:', error);
      // Handle errors
    }
  };

  if (loading) {
    return <p>Loading book requests...</p>;
  }

  if (error) {
    return <p>Error loading book requests: {error.message}</p>;
  }

  return (
    <div>
      <h2>Pending Book Requests</h2>
      {bookRequests.length === 0 ? (
        <p>No pending book requests.</p>
      ) : (
        <ul>
          {bookRequests.map(book => (
            <li key={book.id}>
              <h3>{book.name} by {book.author}</h3>
              <p>{book.text}</p>
              <button onClick={() => handleApprove(book.id)}>Approve</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookRequests;