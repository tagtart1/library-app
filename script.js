

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




const addBookToLibrary = (e) => {
    
    e.preventDefault();
    const newBook = getBookFromInput();

    myLibrary.push(newBook);
    loopAndDisplayBooks();
    resetAndCloseForm();
    
}

function loopAndDisplayBooks() {
        
    const libContainer = document.querySelector('.library-container');
    const cardItem = document.createElement('div');
    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const pagesPara = document.createElement('p');
    const submitBtn = document.createElement('button');


    cardItem.classList.add('card-item');

    titlePara.textContent = `"${myLibrary[myLibrary.length - 1].title}"`;
    authorPara.textContent = `${myLibrary[myLibrary.length - 1].author}`;
    pagesPara.textContent = `${myLibrary[myLibrary.length - 1].pages} pages`;
    submitBtn.textContent = `Read`;

    cardItem.appendChild(titlePara);
    cardItem.appendChild(authorPara);
    cardItem.appendChild(pagesPara);
    cardItem.appendChild(submitBtn);

    libContainer.appendChild(cardItem);
}


function getBookFromInput() {
    let titleValue = document.querySelector("#title").value;
    let authorValue = document.querySelector("#author").value;
    let pagesValue = document.querySelector("#pages").value;
    let isReadValue = document.querySelector("#haveRead").checked;
    return new Book(titleValue, authorValue, pagesValue, isReadValue);
}


function resetAndCloseForm() {
    form.reset();
    const popup = document.querySelector('.popup-container');
    popup.style.display ='none';
}



const form = document.querySelector('.form');
const newBookBtn = document.querySelector('.new-book-btn');

form.onsubmit = addBookToLibrary;

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







