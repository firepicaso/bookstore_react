import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const BooksPage = () => {
  const books = [
    { id: uuidv4(), title: 'The Hunger Games', author: 'Suzanne Collins' },
    { id: uuidv4(), title: 'Dune', author: 'Frank Herbert' },
    { id: uuidv4(), title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
  ];

  return (
    <div className="books-container">
      <ul className="books">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BooksPage;
