import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/features/book/bookSlice';
import '../styles/addBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleBookAdd = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(postBook({
        item_id: uuidv4(),
        title,
        author,
        category: 'Unknown',
      }));
      setTitle('');
      setAuthor('');
      setError('');
      document.querySelector('form').reset();
    } else {
      setError('Book title and Author must be specified');
    }
  };

  return (
    <div className="add-book-container">
      <hr />
      <h1 className="add-book-header">
        Add new book
        <span className="input-error">{error}</span>
      </h1>
      <form>
        <input
          type="text"
          placeholder="Book title"
          className="add-book-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button
          type="submit"
          onClick={(e) => handleBookAdd(e)}
          className="add-new-book"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
