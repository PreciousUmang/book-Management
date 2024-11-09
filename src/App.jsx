import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import { books } from './utils/mockData'

function App() {

  const [search, setSearch] = useState("")
  const [filteredBooks, setFilteredBooks] = useState(books)

  function handleClick() {
    const filterBooks = books.filter(book => book.title.toUpperCase().includes(search.toUpperCase()))
    setFilteredBooks(filterBooks)
  }

  return (
    <>
      <div className='my-4'>
        <h2 className='font-semibold text-lg my-4'>Search Books</h2>
        <input type="text" className='border rounded-s-lg p-3' onChange={(e) => setSearch(e.target.value)} />
        <button className='border rounded-e-lg p-3' onClick={handleClick}>Search</button>
      </div>
      <BookList booksData={filteredBooks} />
    </>
  )
}

export default App
