import '../styles/books.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeBooks } from '../redux/features/books/bookSlice';

const Books = () => {
  const store = useSelector((store) => store);
  const { books } = store.books;
  const dispatch = useDispatch();
  return (
    <ul>
      {books.map((element) => (
        <section key={element.item_id} className="booksStorage" id={element.item_id}>
          <ul>
            <li>{element.category}</li>
            <li>{element.title}</li>
            <li>{element.author}</li>
            <li>
              <button type="button" className="links">Comments</button>
              {' '}
              |
              {' '}
              <button type="button" className="links" onClick={() => dispatch(removeBooks(element.item_id))}>Remove</button>
              {' '}
              |
              {' '}
              <button type="button" className="links">Edit</button>
            </li>
          </ul>
          <div>
            <div className="status" key={element.key} />
            <ul>
              <li>
                <h2>
                  {element.percentage}
                  %
                </h2>
              </li>
              <li>COMPLETED</li>
            </ul>
          </div>
          {' '}
          |
          <ul>
            <li><h5>CURRENT CHAPTER</h5></li>
            <li>{element.chapter}</li>
            <li><button type="button">UPDATE PROGRESS</button></li>
          </ul>
        </section>
      ))}
    </ul>
  );
};

export default Books;
