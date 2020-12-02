// PROPER WAY TO DELETE ELEMENT IN HTML
let list = document.querySelector("#book-list ul");
list.addEventListener('click', function (e) {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// ADD ELEMENT IN HTML
let addbook = document.querySelector("#add-book");
addbook.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addbook.querySelector('input[type = "text"]').value;
    console.log(value);
    let list = document.querySelector("#book-list ul");
    list.innerHTML += '<li><span class="name">' + value + '</span><span class="delete">delete</span></li>';
    let clear = addbook.querySelector('input[type = "text"]');
    clear.textContent = " ";

});

// CHECK BOXES AND CHANGE EVENT
let hideBook = document.querySelector('#hide');
hideBook.addEventListener('change', function (e) {
    if (hideBook.checked) {
        list.style.display = "none";
    }
    else {
        list.style.display = "block";
    }
});


//SEARCH BOOK
let searchBook = document.querySelector('#search-books input');
searchBook.addEventListener('keyup', function (e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');


    Array.from(books).forEach(function (book) {
        const title = book.firstElementChild.textContent;

        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';

        }
        else {
            book.style.display = 'none';

        }
    });
});