import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteBook } from '../redux/features/book/bookSlice';
import '../styles/bookCard.css';

const BookCard = ({
  item, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const percentage = 85;

  return (
    <div className="book-card">
      <div className="book-details">
        <div className="genre">{ category }</div>
        <div className="book-title">{ title }</div>
        <div className="book-author">{ author }</div>
        <div className="book-buttons">
          <button type="button" className="book-btn">Comments</button>
          <button
            type="button"
            className="book-btn"
            onClick={() => handleDelete(item)}
          >
            Remove
          </button>
          <button type="button" className="book-btn">Edit</button>
        </div>
      </div>

      <div
        style={{ width: '10rem', height: '4.25rem' }}
        className="circle-flex"
      >
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
        />
        <div className="completed">
          <p className="ml-5 text-sm">
            <span className="font-semibold">{percentage}</span>
            % Completed
          </p>
        </div>
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
  item: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
