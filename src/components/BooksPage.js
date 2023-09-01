import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BooksPage = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksPage;
