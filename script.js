

let myLibrary = [];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

const formSubmitBtn = document.getElementById('form-button');
const newBookBtn = document.querySelector('.new-book-btn');


const addBookToLibrary = (e) => {
    e.preventDefault();
    const newBook = getBookFromInput();

    myLibrary.push(newBook);
    resetAndCloseForm();
    
    
    
    
}

function getBookFromInput() {
    let titleValue = document.querySelector("#title").value;
    let authorValue = document.querySelector("#author").value;
    let pagesValue = document.querySelector("#pages").value;
    let isReadValue = document.querySelector("#haveRead").checked;
    return new Book(titleValue, authorValue, pagesValue, isReadValue);
}


function resetAndCloseForm() {
    document.querySelector('.form').reset();
    const popup = document.querySelector('.popup-container');
    popup.style.display ='none';
}





newBookBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup-container');
    popup.style.display ='block';
    
});

window.onclick = function (e) {
    const popup = document.querySelector('.popup-container');
    if (e.target == popup) {
        popup.style.display ='none';
    }
}

formSubmitBtn.onsubmit = addBookToLibrary;



