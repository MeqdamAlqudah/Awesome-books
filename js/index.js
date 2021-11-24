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
BookOperation.books.forEach((book) => BookOperation.addBookElement(book, () => {}));