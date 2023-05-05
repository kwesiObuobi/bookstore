import React from 'react';
import BookCard from './BookCard';
import '../styles/bookList.css';

const BookList = () => (
  <div className="book-list">
    <BookCard />
    <BookCard />
    <BookCard />
  </div>
);

export default BookList;
