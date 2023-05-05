import React from 'react';

const BookCard = () => {
  const sam = 'hey';
  return (
    <div className="book-card">
      {sam}
      <div className="book-details">
        <div className="genre">Action</div>
        <div className="book-title">The Hunger Games</div>
        <div className="book-author">Suzzane Collins</div>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>

        <div className="progress-box">
          <div className="percentage">80%</div>
          <div className="completed-text">Completed</div>
        </div>

        <div className="chapter-box">
          <p>current chapter</p>
          <div className="chapter">Chapter 17: &quot;A Lesson Learned&quot;</div>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
