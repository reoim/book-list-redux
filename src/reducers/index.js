import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // Adding key to our global application state called books
  // Where the key is books and the value is whatever gets returned
  // from the books reducer
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
