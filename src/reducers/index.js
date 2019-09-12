import { combineReducers } from "redux";

import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    // our first state in Redux store - books
    books: BooksReducer
});

export default rootReducer;