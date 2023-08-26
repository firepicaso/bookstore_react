import PropTypes from 'prop-types';

const Book = (props) => {
    const { title, author } = props;
  
    return (
      <li>
        <p className='book-title'>
          {title}
        </p>
        <div>
          <p className='book-author'>
            {author}
          </p>
          <button type="button">Remove</button>
        </div>
      </li>
    );
  };
  
  Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };
  
  export default Book;