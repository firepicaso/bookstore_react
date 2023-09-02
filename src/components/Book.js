import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = (props) => {
  const {
    id, title, author,
  } = props;

  const dispatch = useDispatch();

  const removeClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book-div">
      <div className="book-details">
        <h2 className="category">Action</h2>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="buttons-div">
          <button className="button" type="button">Comments</button>
          <span className="button-divider">|</span>
          <button className="button" type="button" onClick={removeClick}>Remove</button>
          <span className="button-divider">|</span>
          <button className="button" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-details">
        <div className="percentage-div">
          <span className="percentage">64%</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter-details">
        Chapter 17
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
