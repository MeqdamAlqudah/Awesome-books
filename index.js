// Function to Define an Object
function Book(title, author) {
  this.title = title;
  this.author = author;
}
// Function to add a book
function Add(arr, title, author) {
  arr = arr.append(Book(title, author));
  return arr;
}
// Function to remove a book
function Remove(arr, title, author) {
  arr = arr.filter();
}
