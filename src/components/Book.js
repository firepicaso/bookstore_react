import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const removeClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <h2 className="book-title">
        {title}
      </h2>
      <div>
        <span className="book-author">
          {author}
        </span>
        <span className="book-category">
          {category}
        </span>
        <button type="button" onClick={removeClick}>Remove</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
