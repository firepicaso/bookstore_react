import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const id = uuidv4();

    dispatch(addBook({
      item_id: id, title, author, category: '',
    }));

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h2 className="form-header">ADD NEW BOOK</h2>
      <form className="form" onSubmit={submitForm}>
        <input type="text" placeholder="Book title" value={title} onChange={changeTitle} />
        <input type="text" placeholder="Author" value={author} onChange={changeAuthor} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
