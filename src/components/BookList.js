import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import '../styles/bookList.css';
import AddBook from './AddBook';

const BookList = () => {
  const { books } = useSelector((store) => store.book);

  return (
    <div className="book-list">
      {
        books.map((book) => (
          <BookCard
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      }

      {/* <BookCard />
      <BookCard />
      <BookCard /> */}
      <AddBook />
    </div>
  );
};

export default BookList;
