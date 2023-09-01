import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';


const Book = (props) => {
  const { id, title, author, category } = props;

  const dispatch = useDispatch();

  const removeClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <p className="book-title">
        {title}
      </p>
      <div>
        <p className="book-author">
          {author}
        </p>
        <p className="book-category">
          {category}
        </p>
        <button type="button" onClick={removeClick}>Remove</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
