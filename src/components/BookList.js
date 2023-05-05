import React from 'react';
import BookCard from './BookCard';
import '../styles/bookList.css';
import AddBook from './AddBook';

const BookList = () => (
  <div className="book-list">
    <BookCard />
    <BookCard />
    <BookCard />
    <AddBook />
  </div>
);

export default BookList;
