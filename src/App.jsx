import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import { books } from './utils/mockData'

function App() {
  return (
    <>
      <BookList booksData = {books}/>
    </>
  )
}

export default App
