import BookCollection from './modules/bookCollection.js';
import navigation from './modules/navigation.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const bookCollection = new BookCollection();
const nav = new navigation();
  
const addBookForm = document.querySelector('.add-form');
addBookForm.addEventListener('submit', (event) => bookCollection.addBook(event));
  
bookCollection.displayBooks();

const dateTime = document.querySelector('.date-time');

setInterval(() => {
    const date = DateTime.now();
    dateTime.innerHTML = date.toLocaleString(DateTime.DATETIME_FULL);
  }, 1000);