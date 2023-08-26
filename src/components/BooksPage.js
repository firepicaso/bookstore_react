import Book from './Book';
import Form from './Form';

const BooksPage = () => {
  const books = [
    { title: 'The Hunger Games', author: 'Suzanne Collins' },
    { title: 'Dune', author: 'Frank Herbert' },
    { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
  ];

  return (
    <div className='books-container'>
        <ul className="books">
          {books.map((book) => (
            <Book title={book.title} author={book.author} />
          ))}
        </ul>
        <Form />
    </div>
  );
};

export default BooksPage;