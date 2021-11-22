
let books = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}
// Function to add a book
function addBook(title, author) {
  books.push(new Book(title, author));
}
// Function to remove a book
// function removeBook(title, author) {
//   books = books.filter(book => !(book.title == title && book.author == author));
// }

function removeBook(book) {
  books = books.filter(bookEl => bookEl != book);
}

addBook('blah', 'asdfasdfh');
addBook('adsf', 'wbry56u3');
addBook('fdg', 'rgyj4');
addBook('zxcv', 'fjk6568ik');

console.log(books);



const titleElement = document.querySelector('#title');
const title = titleElement.value;
const authorElement = document.querySelector('#author');
const author = authorElement.value; 
const bookList = document.querySelector('#book-list');

for (let book of books) {
  const li = document.createElement("li");
  const titleP = document.createElement("p");
  titleP.innerText = book.title;
  const authorP = document.createElement("p");
  authorP.innerText = book.author;
  const removeButton = document.createElement("button");
  removeButton.innerText = 'REMOVE';
  removeButton.addEventListener("click", () => {
    removeBook(book);
    li.remove();
  });
  li.appendChild(titleP);
  li.appendChild(authorP);
  li.appendChild(removeButton);
  bookList.appendChild(li);
}
