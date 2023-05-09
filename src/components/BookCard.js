import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/bookCard.css';

const BookCard = ({ title, author, category }) => {
  const [completed, setCompleted] = useState('0');

  useEffect(() => {
    setCompleted('80%');
  }, []);

  return (
    <div className="book-card">
      <div className="book-details">
        <div className="genre">{ category }</div>
        <div className="book-title">{ title }</div>
        <div className="book-author">{ author }</div>
        <div className="book-buttons">
          <button type="button" className="book-btn">Comments</button>
          <button type="button" className="book-btn">Remove</button>
          <button type="button" className="book-btn">Edit</button>
        </div>
      </div>

      <div className="progress-box">
        <div className="percentage">{completed}</div>
        <div className="completed-text">Completed</div>
      </div>

      <div className="chapter-box">
        <p>current chapter</p>
        <div className="chapter">Chapter 17: &quot;A Lesson Learned&quot;</div>
        <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
