import BookCollection from './modules/bookCollection.js';
import navigation from './modules/navigation.js';

const bookCollection = new BookCollection();
const nav = new navigation();
  
const addBookForm = document.querySelector('.add-form');
addBookForm.addEventListener('submit', (event) => bookCollection.addBook(event));
  
bookCollection.displayBooks();
