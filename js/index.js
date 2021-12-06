import luxon from './luxon.js';
import Book from './book.js';

class BookOperation {
  static books = JSON.parse(localStorage.getItem('books') || '[]');

  static bookList = document.querySelector('#book-list');

  static titleElement = document.querySelector('#title');

  static authorElement = document.querySelector('#author');

  static addButton = document.getElementById('add-button');

  static addBook(book) {
    BookOperation.books.push(book);
    localStorage.setItem('books', JSON.stringify(BookOperation.books));
  }

  static removeBook(book) {
    BookOperation.books = BookOperation.books.filter((bookEl) => bookEl !== book);
    localStorage.setItem('books', JSON.stringify(BookOperation.books));
  }

  static addBookElement(book, addBook) {
    addBook(book);
    const li = document.createElement('li');
    const titleP = document.createElement('p');
    titleP.innerText = `" ${book.title} "`;
    const authorP = document.createElement('p');
    authorP.innerText = `by ${book.author}`;
    const removeButton = document.createElement('button');
    removeButton.addEventListener('click', () => {
      BookOperation.removeBook(book);
      li.remove();
    });

    removeButton.innerText = 'REMOVE';
    li.appendChild(titleP);
    li.appendChild(authorP);
    li.appendChild(removeButton);
    BookOperation.bookList.appendChild(li);
  }

  static addNewBookElement() {
    const title = BookOperation.titleElement.value;
    BookOperation.titleElement.value = '';
    const author = BookOperation.authorElement.value;
    BookOperation.authorElement.value = '';
    const newBook = new Book(title, author);
    BookOperation.addBookElement(newBook, BookOperation.addBook);
  }
}

BookOperation.addButton.addEventListener('click', BookOperation.addNewBookElement);
BookOperation.books.forEach((book) => BookOperation.addBookElement(book, () => { }));

const list = document.querySelector('#book-list-section');
const addNew = document.querySelector('#add-book-section');
const contact = document.querySelector('#contact-info-section');

function openList() {
  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
    addNew.classList.add('hidden');
    contact.classList.add('hidden');
  }
}

function openAddNew() {
  if (addNew.classList.contains('hidden')) {
    addNew.classList.remove('hidden');
    contact.classList.add('hidden');
    list.classList.add('hidden');
  }
}

function openContact() {
  if (contact.classList.contains('hidden')) {
    contact.classList.remove('hidden');
    list.classList.add('hidden');
    addNew.classList.add('hidden');
  }
}

const listBtn = document.querySelector('.list-btn');
const AddNewBtn = document.querySelector('.add-new-btn');
const contactBtn = document.querySelector('.contact-btn');
listBtn.style.color = '#0d6efd';
listBtn.addEventListener('click', () => {
  listBtn.style.color = '#0d6efd';
  AddNewBtn.style.color = 'black';
  contactBtn.style.color = 'black';
  openList();
});

AddNewBtn.addEventListener('click', () => {
  listBtn.style.color = 'black';
  AddNewBtn.style.color = '#0d6efd';
  contactBtn.style.color = 'black';
  openAddNew();
});

contactBtn.addEventListener('click', () => {
  listBtn.style.color = 'black';
  AddNewBtn.style.color = 'black';
  contactBtn.style.color = '#0d6efd';
  openContact();
});

const dateAndTime = document.querySelector('.date-and-time');
dateAndTime.innerText = luxon.DateTime.now().setLocale('en-US').toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS);