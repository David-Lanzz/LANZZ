import '../styles/create.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBooks } from '../redux/features/books/bookSlice';

const Create = () => {
  const dispatch = useDispatch();
  const [input, changeInput] = useState({
    title: '',
    author: '',
    category: '',
  });
  const handleChange = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(addBooks(input));
  };
  return (
    <section className="createsection">
      <h3>ADD NEW BOOK</h3>
      <form action="" onSubmit={handleSubmit}>
        <ul className="inputcontainer">
          <li className="titlecontainer"><input placeholder="Book title" name="title" onChange={handleChange} defaultValue={input.title} className="title" type="text" /></li>
          <li className="categorycontainer"><input placeholder="Category" name="category" onChange={handleChange} defaultValue={input.category} className="category" type="text" /></li>
          <li><input type="button" onClick={handleSubmit} value="ADD BOOK" /></li>
        </ul>
      </form>
    </section>
  );
};
export default Create;
