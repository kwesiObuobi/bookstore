import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/features/book/bookSlice';
import '../styles/addBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleBookAdd = () => {
    dispatch(addBook({
      item_id: 1,
      title,
      author,
      category: 'Fiction',
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-book-container">
      <h1 className="add-book-header">Add new book</h1>
      <form action="#">
        <input
          type="text"
          placeholder="Book title"
          className="add-book-input"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          name="new-author"
          id="new-author"
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="author-1">Author 1</option>
          <option value="author-2">Author 2</option>
          <option value="author-3">Author 3</option>
        </select>
        <button
          type="submit"
          onClick={() => handleBookAdd()}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
