import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import { books } from './utils/mockData'

function App() {
  return (
    <>
      <div className='my-4'>
        <h2 className='font-semibold text-lg my-4'>Search Books</h2>
        <input type="text" className='border rounded-s-lg p-3' />
        <button className='border rounded-e-lg p-3'>Search</button>
      </div>

      <BookList booksData={books} />
    </>
  )
}

export default App
