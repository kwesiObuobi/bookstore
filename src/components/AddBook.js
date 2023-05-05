import React from 'react';
import '../styles/addBook.css';

const AddBook = () => (
  <div className="add-book-container">
    <h1 className="add-book-header">Add new book</h1>
    <form action="#">
      <input type="text" placeholder="Book title" required />
      <select name="new-author" id="new-author">
        <option value="author-1">Author 1</option>
        <option value="author-2">Author 2</option>
        <option value="author-3">Author 3</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
