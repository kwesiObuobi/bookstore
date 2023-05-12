import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from './BookCard';
import '../styles/bookList.css';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/features/book/bookSlice';

const BookList = () => {
  const { books, isLoading, error } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error on Page</p>;
  }

  return (
    <div className="book-list">
      {
        books.map((book) => (
          <BookCard
            key={book.item_id}
            item={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      }

      <AddBook />
    </div>
  );
};

export default BookList;
