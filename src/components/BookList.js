import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import '../styles/bookList.css';
import AddBook from './AddBook';

const BookList = () => {
  const { books } = useSelector((store) => store.book);
  console.log(books);

  return (
    <div className="book-list">
      <BookCard />
      <BookCard />
      <BookCard />
      <AddBook />
    </div>
  );
};

export default BookList;
