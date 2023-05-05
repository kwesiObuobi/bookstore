import React, { useState, useEffect } from 'react';
import '../styles/BookCard.css';

const BookCard = () => {
  const [completed, setCompleted] = useState('0');

  useEffect(() => {
    setCompleted('80%');
  }, []);

  return (
    <div className="book-card">
      <div className="book-details">
        <div className="genre">Action</div>
        <div className="book-title">The Hunger Games</div>
        <div className="book-author">Suzzane Collins</div>
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

export default BookCard;
