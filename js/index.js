let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}
// Function to add a book
function addBook(book) {
  books.push(book);
}
// Function to remove a book
function removeBook(book) {
  books = books.filter((bookEl) => bookEl !== book);
}
// Function to add element the html file
/* prettier-ignore */
function addBookElement() {
  /* prettier-ignore */
  const titleElement = document.querySelector('#title');
  const title = titleElement.value;
  /* prettier-ignore */
  const authorElement = document.querySelector('#author');
  const author = authorElement.value;
  const newBook = new Book(title, author);
  addBook(newBook);
  /* prettier-ignore */
  const bookList = document.querySelector('#book-list');
  const li = document.createElement('li');
  const titleP = document.createElement('p');
  titleP.innerText = title;
  const authorP = document.createElement('p');
  authorP.innerText = author;
  /* prettier-ignore */
  const removeButton = document.createElement('button');
  /* prettier-ignore */
  removeButton.addEventListener('click', () => {
    removeBook(newBook);
    li.remove();
  });
  removeButton.innerText = 'REMOVE';
  li.appendChild(titleP);
  li.appendChild(authorP);
  li.appendChild(removeButton);
  bookList.appendChild(li);
}
/* prettier-ignore */
const addButton = document.getElementById('add-button');
/* prettier-ignore */
addButton.addEventListener('click', addBookElement);
