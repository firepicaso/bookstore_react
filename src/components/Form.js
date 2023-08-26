const Form = () => (
  <div className="form-container">
    <h2>ADD NEW BOOK</h2>
    <form className="form">
      <input type="text" placeholder="Book title" />
      <select id="authors" name="authors">
        <option>Author</option>
        <option value="Suzanne Collins">Suzanne Collins</option>
        <option value="Frank Herbert">Frank Herbert</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
