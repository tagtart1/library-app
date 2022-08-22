

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
    addAndDisplayBook(newBook);
    resetAndCloseForm();
    
}

function addAndDisplayBook(newBook) {
        
    const libContainer = document.querySelector('.library-container');
    const cardItem = document.createElement('div');
    const titlePara = document.createElement('p');
    const deleteIcon = document.createElement('img');
    const authorPara = document.createElement('p');
    const pagesPara = document.createElement('p');
    const submitBtn = document.createElement('button');


    cardItem.classList.add('card-item');
    deleteIcon.classList.add('delete-icon');

    titlePara.textContent = `"${newBook.title}"`;
    deleteIcon.src = "delete.svg"; deleteIcon.alt="delete icon";
    
    authorPara.textContent = `${newBook.author}`;
    pagesPara.textContent = `${newBook.pages} pages`;


    submitBtn.textContent = newBook.isRead ? 'Read' : "Not read";

    if(newBook.isRead)  submitBtn.classList.add('have-read');
    

    submitBtn.addEventListener('click', toggleBtnRead )
    deleteIcon.addEventListener('click', deleteBook )

    cardItem.setAttribute('data-index', `${myLibrary.length - 1}`);
    cardItem.appendChild(titlePara);
    cardItem.appendChild(deleteIcon);
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
    return new Book( authorValue, titleValue, pagesValue, isReadValue);
}

function toggleBtnRead(e) {
    myLibrary[e.target.parentElement.getAttribute('data-index')].toggleRead();
    e.target.textContent = myLibrary[e.target.parentElement.getAttribute('data-index')].isRead ? 'Read' : "Not read";
    e.target.classList.toggle("have-read");
}

function deleteBook(e) {
    //remove from array library
    myLibrary.splice(e.currentTarget.parentElement.getAttribute('data-index'), 1);
    //remove from DOM
    e.currentTarget.parentElement.remove();
    //adjust all data indexes to accurate resemble its index in library array
    cardItems = document.querySelectorAll('.card-item');
    cardItems.forEach((cardItem) => {
        if(cardItem.dataset.index == 0) return;
        
        else {
            cardItem.dataset.index = cardItem.dataset.index - 1
        }
    });
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







