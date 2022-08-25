



class Book {

    constructor(author, title, pages, isRead) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleRead = () => {
        this.isRead = !this.isRead;
    }
   
}

class Library {
    myLibrary = [];

    form = document.querySelector('.form');
    newBookBtn = document.querySelector('.new-book-btn');

    constructor() {
        

        this.newBookBtn.addEventListener('click', () => {
            const popup = document.querySelector('.popup-container');
            popup.style.display ='block';
            
        });
    }

    get form() {
        return this.form;
    }

    getBookFromInput() {
        let titleValue = document.querySelector("#title").value;
        let authorValue = document.querySelector("#author").value;
        let pagesValue = document.querySelector("#pages").value;
        let isReadValue = document.querySelector("#haveRead").checked;
        return new Book( authorValue, titleValue, pagesValue, isReadValue);
    }

    //Changes read property and CSS classes
    toggleBtnRead(e) {
        this.myLibrary[e.target.parentElement.getAttribute('data-index')].toggleRead();
        e.target.textContent = this.myLibrary[e.target.parentElement.getAttribute('data-index')].isRead ? 'Read' : "Not read";
        e.target.classList.toggle("have-read");
    }

    addBookToLibrary = (e) => {
        //stops webpage from refreshing when submitting
        e.preventDefault();
        const newBook = this.getBookFromInput();
    
        this.myLibrary.push(newBook);
        //create DOM book card
        this.addAndDisplayBook(newBook);
        //empties form upon submission
        this.resetAndCloseForm();
        
    }

    deleteBook(e) {
        //remove from array library
        this.myLibrary.splice(e.currentTarget.parentElement.getAttribute('data-index'), 1);
        //remove from DOM
        e.currentTarget.parentElement.remove();
        //adjust all data indexes to accurate resemble its index in library array
        let cardItems = document.querySelectorAll('.card-item');
        cardItems.forEach((cardItem) => {
            if(cardItem.dataset.index == 0) return;
            
            else {
                cardItem.dataset.index = cardItem.dataset.index - 1
            }
        });
    }

    //create DOM book card
    addAndDisplayBook(newBook) {
        
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
    

    submitBtn.addEventListener('click', (e) => { this.toggleBtnRead(e)}) 
    deleteIcon.addEventListener('click', (e) => { this.deleteBook(e)} )

    cardItem.setAttribute('data-index', `${this.myLibrary.length - 1}`);
    cardItem.appendChild(titlePara);
    cardItem.appendChild(deleteIcon);
    cardItem.appendChild(authorPara);
    cardItem.appendChild(pagesPara);
    cardItem.appendChild(submitBtn);

    libContainer.appendChild(cardItem);
}
    resetAndCloseForm() {
        this.form.reset();
        const popup = document.querySelector('.popup-container');
        popup.style.display ='none';
    }
}



const library = new Library();

library.form.onsubmit = library.addBookToLibrary;



//Clicking anywhere but the form closes it
window.onclick = function (e) {
    const popup = document.querySelector('.popup-container');
    if (e.target == popup) {
        popup.style.display ='none';
    }
}







