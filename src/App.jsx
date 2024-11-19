import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import { books } from './utils/mockData'; // Ensure mockData is properly defined
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = () => {
    const filtered = books.filter((book) =>
      book.title.toUpperCase().includes(search.toUpperCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <Search setSearch={setSearch} handleSearch={handleSearch} />
        <BookList booksData={filteredBooks} />
      </div>
    </>
  );
}

export default App;
